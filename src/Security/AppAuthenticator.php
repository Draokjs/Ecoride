<?php

namespace App\Security;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\Exception\InvalidEmailException;
use Symfony\Component\Security\Core\Exception\InvalidPasswordException;
use Symfony\Component\Security\Http\Authenticator\AbstractLoginFormAuthenticator;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\CsrfTokenBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\UserBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Credentials\PasswordCredentials;
use Symfony\Component\Security\Http\Authenticator\Passport\Passport;
use Symfony\Component\Security\Http\Util\TargetPathTrait;
use Psr\Log\LoggerInterface;

class AppAuthenticator extends AbstractLoginFormAuthenticator
{
    use TargetPathTrait;

    private UrlGeneratorInterface $urlGenerator;
    private LoggerInterface $logger;

    public function __construct(UrlGeneratorInterface $urlGenerator, LoggerInterface $logger)
    {
        $this->urlGenerator = $urlGenerator;
        $this->logger = $logger;
    }

    public function authenticate(Request $request): Passport
    {
        $email = $request->request->get('email', '');
        $password = $request->request->get('password', '');
        $csrfToken = $request->request->get('_csrf_token');

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            throw new InvalidEmailException('Invalid email address');
        }

        if (empty($password)) {
            throw new InvalidPasswordException('Password cannot be empty');
        }

        $request->getSession()->set(Security::LAST_USERNAME, $email);

        return new Passport(
            new UserBadge($email),
            new PasswordCredentials($password),
            [
                new CsrfTokenBadge('authenticate', $csrfToken),
            ]
        );
    }

    public function onAuthenticationSuccess(Request $request, $token, string $firewallName): ?RedirectResponse
    {
        // Log the user's successful login attempt
        $this->logger->info('User logged in successfully', ['username' => $token->getUserIdentifier()]);

        // Si l'utilisateur avait une URL cible (ex: page protégée visitée avant login), redirige vers cette URL
        if ($targetPath = $this->getTargetPath($request->getSession(), $firewallName)) {
            return new RedirectResponse($targetPath);
        }

        // Sinon redirige vers la page d'accueil (home)
        return new RedirectResponse($this->urlGenerator->generate('home'));
    }

    protected function getLoginUrl(Request $request): string
    {
        return $this->urlGenerator->generate('app_login');
    }
}

