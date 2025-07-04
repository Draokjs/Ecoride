<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use App\Form\SearchType;
use App\Repository\TripRepository;

class HomeController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function index(Request $request, TripRepository $tripRepo): Response
    {
        $form = $this->createForm(SearchType::class);
        $form->handleRequest($request);

        // Get distinct departure cities from trips
        $cities = $tripRepo->createQueryBuilder('t')
            ->select('DISTINCT t.villeDepart')
            ->getQuery()
            ->getSingleColumnResult();

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();
            // handle form submission if needed
        }

        return $this->render('home/homepage.html.twig', [
            'form' => $form->createView(),
            'cities' => $cities,  // Pass cities to Twig
        ]);
    }
}
