<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Form\SearchType;
use App\Repository\TripRepository;

class HomeController extends AbstractController
{
        #[Route('/', name: 'home')]
    public function home(Request $request, TripRepository $tripRepo): Response
    {
        // Create the search form
        $form = $this->createForm(SearchType::class, null, [
            'method' => 'GET',
            'action' => $this->generateUrl('search_results'),
        ]);
        $form->handleRequest($request);

        // Fetch distinct cities for autocomplete datalists
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

        $cities = array_merge($departureCities, $arrivalCities);

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

        if ($form->isSubmitted() && $form->isValid()) {
            $criteria = $form->getData();

            // Example search, adjust fields to your entity/form fields
            $qb = $tripRepo->createQueryBuilder('t');

            if (!empty($criteria['Ville_depart'])) {
                $qb->andWhere('t.villeDepart LIKE :depart')
                   ->setParameter('depart', '%'.$criteria['Ville_depart'].'%');
            }
            if (!empty($criteria['Ville_arrivee'])) {
                $qb->andWhere('t.villeArrivee LIKE :arrivee')
                   ->setParameter('arrivee', '%'.$criteria['Ville_arrivee'].'%');
            }
            if (!empty($criteria['date_depart'])) {
                $qb->andWhere('t.dateDepart >= :dateDepart')
                   ->setParameter('dateDepart', $criteria['date_depart']);
            }
            if (!empty($criteria['date_arrivee'])) {
                $qb->andWhere('t.dateArrivee <= :dateArrivee')
                   ->setParameter('dateArrivee', $criteria['date_arrivee']);
            }
            if (!empty($criteria['nombre_passagers'])) {
                $qb->andWhere('t.nombrePassagers >= :passagers')
                   ->setParameter('passagers', $criteria['nombre_passagers']);
            }

            $trips = $qb->getQuery()->getResult();
        }

        // Also fetch autocomplete cities for the form again to re-display it
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

        return $this->render('home/search_results.html.twig', [
            'form' => $form->createView(),
            'trips' => $trips,
            'departureCities' => $departureCities,
            'arrivalCities' => $arrivalCities,
        ]);
    }
}

