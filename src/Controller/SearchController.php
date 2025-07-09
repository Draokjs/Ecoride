<?php
// src/Controller/SearchController.php

namespace App\Controller;

use App\Repository\TripRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SearchController extends AbstractController
{
    #[Route('/trip', name: 'resultat')]
    public function search(Request $request, TripRepository $tripRepository): Response
    {
        $villeDepart = $request->query->get('villeDepart');
        $villeArrivee = $request->query->get('villeArrivee');
        $dateDepart = $request->query->get('dateDepart');
        $dateArrivee = $request->query->get('dateArrivee');
        $nombrePassagers = $request->query->get('nombrePassagers');

        // Convert dates safely
        try {
            $dateDepartObj = $dateDepart ? new \DateTime($dateDepart) : null;
            $dateArriveeObj = $dateArrivee ? new \DateTime($dateArrivee) : null;
        } catch (\Exception $e) {
            $dateDepartObj = null;
            $dateArriveeObj = null;
        }

        $qb = $tripRepository->createQueryBuilder('t');

        if ($villeDepart) {
            $qb->andWhere('t.villeDepart = :villeDepart')
               ->setParameter('villeDepart', $villeDepart);
        }

        if ($villeArrivee) {
            $qb->andWhere('t.villeArrivee = :villeArrivee')
               ->setParameter('villeArrivee', $villeArrivee);
        }

        if ($dateDepartObj) {
            $qb->andWhere('t.dateDepart >= :dateDepart')
               ->setParameter('dateDepart', $dateDepartObj);
        }

        if ($dateArriveeObj) {
            $qb->andWhere('t.dateArrivee <= :dateArrivee')
               ->setParameter('dateArrivee', $dateArriveeObj);
        }

        if ($nombrePassagers) {
            $qb->andWhere('t.nombrePassagers >= :nombrePassagers')
               ->setParameter('nombrePassagers', (int)$nombrePassagers);
        }

        // Debug dump: uncomment these lines to debug inputs and SQL query
        dump([
            'villeDepart' => $villeDepart,
            'villeArrivee' => $villeArrivee,
            'dateDepart' => $dateDepartObj,
            'dateArrivee' => $dateArriveeObj,
            'nombrePassagers' => $nombrePassagers,
        ]);
        dump($qb->getQuery()->getSQL());

        $trips = $qb->getQuery()->getResult();

        return $this->render('trip/resultat.html.twig', [
            'trips' => $trips,
        ]);
    }
}
