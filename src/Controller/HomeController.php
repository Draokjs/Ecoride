<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Form\SearchType;
use App\Repository\TripRepository;
use \DateTime;

class HomeController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function home(Request $request, TripRepository $tripRepo): Response
    {
        $form = $this->createForm(SearchType::class, null, [
            'method' => 'GET',
            'action' => $this->generateUrl('search_results'),
        ]);
        $form->handleRequest($request);

        $departureCities = $tripRepo->createQueryBuilder('t')
            ->select('DISTINCT t.villeDepart')
            ->orderBy('t.villeDepart', 'ASC')
            ->getQuery()
            ->getSingleColumnResult();

        $arrivalCities = $tripRepo->createQueryBuilder('t')
            ->select('DISTINCT t.villeArrivee')
            ->orderBy('t.villeArrivee', 'ASC')
            ->getQuery()
            ->getSingleColumnResult();

        $cities = array_unique(array_merge($departureCities, $arrivalCities));

        return $this->render('home/homepage.html.twig', [
            'form' => $form->createView(),
            'departureCities' => $departureCities,
            'arrivalCities' => $arrivalCities,
            'cities' => $cities,
        ]);
    }

    #[Route('/resultat', name: 'search_results')]
    public function searchResults(Request $request, TripRepository $tripRepo): Response
    {
        $form = $this->createForm(SearchType::class, null, ['method' => 'GET']);
        $form->handleRequest($request);

        $trips = [];
        $search = [
            'departure' => '',
            'arrival' => '',
            'dateDeparture' => '',
            'dateArrivee' => '',
            'numberOfPassengers' => 0,
        ];

        if ($form->isSubmitted() && $form->isValid()) {
            $criteria = $form->getData();

            $search = [
                'departure' => $criteria['villeDepart'] ?? '',
                'arrival' => $criteria['villeArrivee'] ?? '',
                'dateDeparture' => $criteria['dateDepart'] ?? '',
                'dateArrivee' => $criteria['dateArrivee'] ?? '',
                'numberOfPassengers' => (int)($criteria['nombrePassagers'] ?? 0),
                    ];

            $qb = $tripRepo->createQueryBuilder('t');

            if (!empty($search['departure'])) {
                $qb->andWhere('t.villeDepart LIKE :depart')
                   ->setParameter('depart', '%'.$search['departure'].'%');
            }
            if (!empty($search['arrival'])) {
                $qb->andWhere('t.villeArrivee LIKE :arrivee')
                   ->setParameter('arrivee', '%'.$search['arrival'].'%');
            }
            if (!empty($search['dateDeparture'])) {
                $dateDepartObj = \DateTime::createFromFormat('Y-m-d', $search['dateDeparture']);
                if ($dateDepartObj) {
                    $qb->andWhere('t.dateDepart >= :dateDepart')
                       ->setParameter('dateDepart', $dateDepartObj);
                }
            }
            if (!empty($search['dateArrivee'])) {
                $dateArriveeObj = \DateTime::createFromFormat('Y-m-d', $search['dateArrivee']);
                if ($dateArriveeObj) {
                    $qb->andWhere('t.dateArrivee <= :dateArrivee')
                       ->setParameter('dateArrivee', $dateArriveeObj);
                }
            }
            if (!empty($search['numberOfPassengers'])) {
                $qb->andWhere('t.nombrePassagers >= :passagers')
                   ->setParameter('passagers', $search['numberOfPassengers']);
            }

            $trips = $qb->getQuery()->getResult();
        }

        $departureCities = $tripRepo->createQueryBuilder('t')
            ->select('DISTINCT t.villeDepart')
            ->orderBy('t.villeDepart', 'ASC')
            ->getQuery()
            ->getSingleColumnResult();

        $arrivalCities = $tripRepo->createQueryBuilder('t')
            ->select('DISTINCT t.villeArrivee')
            ->orderBy('t.villeArrivee', 'ASC')
            ->getQuery()
            ->getSingleColumnResult();

        return $this->render('trip/resultat.html.twig', [
            'form' => $form->createView(),
            'trips' => $trips,
            'departureCities' => $departureCities,
            'arrivalCities' => $arrivalCities,
            'search' => $search,
        ]);
    }
}

