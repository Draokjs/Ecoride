<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\Security;

class LoginController extends AbstractController
{
    #[Route('/login', name: 'app_login')]
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        // Get login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // Last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', [
            'last_username' => $lastUsername,
            'error' => $error,
        ]);
    }
    
    #[Route('/login-check', name: 'app_login_check')]
    public function loginCheck(Request $request, AuthenticationUtils $authenticationUtils, UserPasswordEncoderInterface $passwordEncoder): Response
    {
        $username = $request->request->get('email');
        $password = $request->request->get('password');

        $user = $this->getDoctrine()->getRepository(User::class)->findOneBy(['email' => $username]);

        if (!$user) {
            $this->addFlash('error', 'Invalid username or password');
            return $this->redirectToRoute('app_login');
        }

        $isValid = $passwordEncoder->isPasswordValid($user, $password);

        if (!$isValid) {
            $this->addFlash('error', 'Invalid username or password');
            return $this->redirectToRoute('app_login');
        }

        $this->addFlash('success', 'Bienvenue ' . $user->getUsername() . ' sur Ecoride');

        return $this->redirectToRoute('resultat');
    }
}