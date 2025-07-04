<?php
// src/Controller/SearchController.php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SearchController extends AbstractController
{
    #[Route('/resultat', name: 'resultat')]
    public function search(Request $request): Response
    {
        // Get the GET parameters from the request
        $villeDepart = $request->query->get('Ville_depart');
        $villeArrivee = $request->query->get('Ville_arrivee');
        $dateDepart = $request->query->get('date_depart');
        $dateArrivee = $request->query->get('date_arrivee');
        $nombrePassagers = $request->query->get('nombre_passagers');

        // You can now use these variables to query your database or search logic
        // For example, fetch matching rides using your repository

        // For now, just pass data to the template to debug
        return $this->render('search/results.html.twig', [
            'villeDepart' => $villeDepart,
            'villeArrivee' => $villeArrivee,
            'dateDepart' => $dateDepart,
            'dateArrivee' => $dateArrivee,
            'nombrePassagers' => $nombrePassagers,
        ]);
    }
}
