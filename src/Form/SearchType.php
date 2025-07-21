<?php
namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;

class SearchType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('villeDepart', TextType::class, [
                'label' => "Ville de départ",
                'attr' => [
                    'id' => 'departure-city',
                    'class' => 'form-control fs-4',
                    'placeholder' => 'Ville de départ',
                    'list' => 'cities'
                ],
            ])
            ->add('villeArrivee', TextType::class, [
                'label' => "Ville d'arrivée",
                'attr' => [
                    'id' => 'arrival-city',
                    'class' => 'form-control fs-4',
                    'placeholder' => "Ville d'arrivée",
                    'list' => 'cities'
                ],
            ])
            ->add('dateDepart', DateType::class, [
                'widget' => 'single_text',
                'label' => "Date de départ",
                'attr' => [
                    'id' => 'departuredate',
                    'class' => 'form-control fs-4',
                    'placeholder' => 'Date de départ',
                ],
            ])
            ->add('dateArrivee', DateType::class, [
                'widget' => 'single_text',
                'label' => "Date d'arrivée",
                'attr' => [
                    'id' => 'arrivaldate',
                    'class' => 'form-control fs-4',
                    'placeholder' => "Date d'arrivée",
                ],
            ])
            ->add('nombrePassagers', IntegerType::class, [
                'label' => 'Passagers',
                'attr' => [
                    'id' => 'passengers',
                    'class' => 'form-control fs-4',
                    'min' => 1,
                    'max' => 5,
                ],
            ]);
    }
}
