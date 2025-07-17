<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationFormType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Form\FormError;
use Symfony\Component\Form\FormErrorIterator;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

class RegisterController extends AbstractController
{
    #[Route('/register', name: 'register', methods: ['GET', 'POST'])]
    public function register(
        Request $request,
        SessionInterface $session,
        UserPasswordHasherInterface $passwordHasher,
        EntityManagerInterface $entityManager,
        CsrfTokenManagerInterface $csrfTokenManager
    ): Response {
        $session->start();

        $user = new User();

        $form = $this->createForm(RegistrationFormType::class, $user);

        $form->handleRequest($request);

        $errors = [];
        if ($form->isSubmitted()) {
            $expectedToken = $csrfTokenManager->getToken('registration_form');
            dump('EXPECTED TOKEN:', $expectedToken->getValue());
            if ($form->isValid()) {
                $hashedPassword = $passwordHasher->hashPassword($user, $user->getPlainPassword());
                $user->setPassword($hashedPassword);

                $photoFile = $form->get('photo')->getData();
                if ($photoFile) {
                    $photoData = file_get_contents($photoFile->getPathname());
                    $user->setPhoto($photoData);
                }

                $entityManager->persist($user);
                $entityManager->flush();

                $user->eraseCredentials();

                return $this->redirectToRoute('login');
            } else {
                $errors = $this->getFormErrors($form->getErrors(true, false));
                dump($errors);
            }
        }

        return $this->render('security/register.html.twig', [
            'registrationForm' => $form->createView(),
            'errors' => $errors,
        ]);
    }

    private function getFormErrors(FormErrorIterator $errors): array
    {
        $result = [];
        foreach ($errors as $error) {
            if ($error instanceof FormError) {
                $origin = $error->getOrigin();
                $fieldName = $origin ? $origin->getName() : 'form';
                $result[] = $fieldName . ': ' . $error->getMessage();
            } elseif ($error instanceof FormErrorIterator) {
                $result = array_merge($result, $this->getFormErrors($error));
            }
        }
        return $result;
    }
}

