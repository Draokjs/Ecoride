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
        $type = $request->query->get('type', 'depart');

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
        $nombrePassagers = $request->query->get('nombrePassagers');
        
        try {
            $dateDepartObj = $dateDepart ? new \DateTime($dateDepart) : null;
            $dateArriveeObj = $dateArrivee ? new \DateTime($dateArrivee) : null;
        } catch (\Exception $e) {
            $dateDepartObj = null;
            $dateArriveeObj = null;
        }

        $trips = $tripRepo->findBy([
            'villeDepart' => $villeDepart,
            'villeArrivee' => $villeArrivee,
            'dateDepart' => $dateDepartObj,
            'dateArrivee' => $dateArriveeObj
        ]);

        return $this->render('trip/resultat.html.twig', [
            'trips' => $trips,
            'search' => [
                'departure' => $villeDepart,
                'arrival' => $villeArrivee,
                'dateDeparture' => $dateDepart,
                'dateArrival' => $dateArrivee,
                'numberOfPassengers' => $nombrePassagers,
            ],
        ]);
    }
}

