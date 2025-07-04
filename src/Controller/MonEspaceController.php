<?php
// src/Controller/MonEspaceController.php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MonEspaceController extends AbstractController
{
    #[Route('/Espace', name: 'mon_espace')]
    public function index(): Response
    {
        return $this->render('Espace/mon_espace.html.twig');
    }
}
