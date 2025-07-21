<?php

namespace App\Controller;

use App\Form\SearchType;
use App\Repository\TripRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TripController extends AbstractController
{
    #[Route('/trip/resultat', name: 'trip_resultat')]
    public function resultat(Request $request, TripRepository $tripRepo): Response
    {
        $form = $this->createForm(SearchType::class, null, [
            'method' => 'GET',
            'csrf_protection' => false,
        ]);

        $form->handleRequest($request);

        $trips = [];

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();

        if (is_string($data['dateDepart'] ?? null)) {
            $data['dateDepart'] = new \DateTime($data['dateDepart']);
        }
        if (is_string($data['dateArrivee'] ?? null)) {
            $data['dateArrivee'] = new \DateTime($data['dateArrivee']);
        }

            $villeDepart = $data['villeDepart'] ?? null;
            $villeArrivee = $data['villeArrivee'] ?? null;
            $dateDepartObj = $data['dateDepart'] ?? null;
            $dateArriveeObj = $data['dateArrivee'] ?? null;
            $nombrePassagers = $data['nombrePassagers'] ?? 1;

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
        }

        $search = [
            'villeDepart' => $form->get('villeDepart')->getData() ?? '',
            'villeArrivee' => $form->get('villeArrivee')->getData() ?? '',
            'dateDepart' => $form->get('dateDepart')->getData() ? $form->get('dateDepart')->getData()->format('Y-m-d') : '',
            'dateArrivee' => $form->get('dateArrivee')->getData() ? $form->get('dateArrivee')->getData()->format('Y-m-d') : '',
            'nombrePassagers' => $form->get('nombrePassagers')->getData() ?? 0,
        ];

        return $this->render('trip/resultat.html.twig', [
            'trips' => $trips,
            'form' => $form->createView(),
            'search' => $search,
        ]);
    }
}

