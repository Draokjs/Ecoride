<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\TripRepository;

class TripController extends AbstractController
{
    #[Route('/trip/autocomplete', name: 'trip_autocomplete')]
    public function autocomplete(Request $request, TripRepository $tripRepo): JsonResponse
    {
        $query = $request->query->get('q');
        $type = $request->query->get('type');

        $field = $type === 'arrivee' ? 't.villeArrivee' : 't.villeDepart';

        $results = $tripRepo->createQueryBuilder('t')
            ->select("DISTINCT $field")
            ->where("$field LIKE :query")
            ->setParameter('query', $query . '%')
            ->setMaxResults(10)
            ->getQuery()
            ->getSingleColumnResult();

        return $this->json($results);
    }

    #[Route('/trip/resultat', name: 'trip_resultat')]
    public function resultat(Request $request, TripRepository $tripRepo): Response
    {
        $villeDepart = $request->query->get('villeDepart');
        $villeArrivee = $request->query->get('villeArrivee');
        $dateDepart = $request->query->get('dateDepart');
        $dateArrivee = $request->query->get('dateArrivee');
        $nombrePassagers = (int) $request->query->get('nombrePassagers', 1);

        try {
            $dateDepartObj = $dateDepart ? new \DateTime($dateDepart) : null;
            $dateArriveeObj = $dateArrivee ? new \DateTime($dateArrivee) : null;
        } catch (\Exception $e) {
            $dateDepartObj = null;
            $dateArriveeObj = null;
        }

        // Use QueryBuilder to build a flexible query
        $qb = $tripRepo->createQueryBuilder('t');

        if ($villeDepart) {
            $qb->andWhere('t.villeDepart LIKE :villeDepart')
                ->setParameter('villeDepart', '%'.$villeDepart.'%');
        }

        if ($villeArrivee) {
            $qb->andWhere('t.villeArrivee LIKE :villeArrivee')
                ->setParameter('villeArrivee', '%'.$villeArrivee.'%');
        }

        if ($dateDepartObj) {
            $qb->andWhere('t.dateDepart >= :dateDepart')
                ->setParameter('dateDepart', $dateDepartObj);
        }

        if ($dateArriveeObj) {
            $qb->andWhere('t.dateArrivee <= :dateArrivee')
                ->setParameter('dateArrivee', $dateArriveeObj);
        }

        if ($nombrePassagers > 0) {
            $qb->andWhere('t.nombrePassagers >= :nombrePassagers')
                ->setParameter('nombrePassagers', $nombrePassagers);
        }

        $trips = $qb->getQuery()->getResult();

        // Prepare search array to pass to twig (for form repopulation etc.)
        $search = [
            'villeDepart' => $villeDepart,
            'villeArrivee' => $villeArrivee,
            'dateDepart' => $dateDepart,
            'dateArrivee' => $dateArrivee,
            'nombrePassagers' => $nombrePassagers,
        ];

        return $this->render('trip/resultat.html.twig', [
            'trips' => $trips,
            'search' => $search,
        ]);
    }
}
