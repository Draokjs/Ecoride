<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

class MonEspaceController extends AbstractController
{
    #[Route('/espace', name: 'mon_espace')]
    public function index(): Response
    {
        $user = $this->getUser();
        $photoBase64 = null;

        if ($user && $user->getPhoto()) {
            $photoBlob = $user->getPhoto();
            $photoBase64 = base64_encode(stream_get_contents($photoBlob));
        }

        return $this->render('espace/mon_espace.html.twig', [
            'user' => $user,
            'photoBase64' => $photoBase64,
        ]);
    }

    #[Route('/Espace')] // Redirect from uppercase URL to lowercase URL
    public function redirectToEspace()
    {
        return $this->redirectToRoute('mon_espace');
    }
}
