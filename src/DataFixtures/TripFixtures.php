<?php
// src/DataFixtures/TripFixtures.php

namespace App\DataFixtures;

use App\Entity\Trip;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class TripFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('fr_FR');

        // Known cities list:
        $cities = ['Paris', 'Lyon', 'Marseille', 'Bordeaux', 'Lille', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg', 'Rennes'];

        for ($i = 0; $i < 100; $i++) {
            $trip = new Trip();

            $villeDepart = $faker->randomElement($cities);
            do {
                $villeArrivee = $faker->randomElement($cities);
            } while ($villeArrivee === $villeDepart);

            $dateDepart = $faker->dateTimeBetween('+1 days', '+1 month');
            $dateArrivee = (clone $dateDepart)->modify('+' . rand(1, 5) . ' days');

            $trip->setVilleDepart($villeDepart);
            $trip->setVilleArrivee($villeArrivee);
            $trip->setDateDepart($dateDepart);
            $trip->setDateArrivee($dateArrivee);
            $trip->setNombrePassagers($faker->numberBetween(1, 4));
            $trip->setDriverName($faker->randomElement($driverNames));
            $trip->setPrice($faker->numberBetween(10, 100));
            $trip->setRating($faker->numberBetween(1, 5));

            $manager->persist($trip);
        }

        $manager->flush();
    }
}
