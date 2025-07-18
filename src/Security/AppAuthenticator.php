<?php

namespace App\Security;

use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\UserProviderInterface;
use Symfony\Component\Security\Core\Exception\CustomUserMessageAuthenticationException;
use Doctrine\ORM\EntityManagerInterface;

class AppAuthenticator extends AbstractAuthenticator
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function supports(TokenInterface $token)
    {
        return $token instanceof UsernamePasswordToken && $token->getProviderKey() === 'app_user_provider';
    }

    public function authenticate(TokenInterface $token, UserProviderInterface $userProvider)
    {
        $username = $token->getCredentials();
        $user = $this->loadUserByUsername($username);

        if (!$user) {
            throw new CustomUserMessageAuthenticationException('Invalid username');
        }

        return new UsernamePasswordToken($user, $username, $user->getRoles());
    }

    public function loadUserByUsername($username)
    {
        return $this->entityManager->getRepository(User::class)->findOneBy(['email' => $username]);
    }
}
