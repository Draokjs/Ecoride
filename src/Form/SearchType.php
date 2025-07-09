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
            ->add('Ville_depart', TextType::class, [
                'label' => "Ville de départ",
                'attr' => [
                    'id' => 'departure-city',
                    'class' => 'form-control fs-4',   // add class to style consistent with HTML
                    'placeholder' => 'Ville de départ',
                    'list' => 'cities'                // if you use datalist as in Twig
                ],
            ])
            ->add('Ville_arrivee', TextType::class, [
                'label' => "Ville d'arrivée",
                'attr' => [
                    'id' => 'arrival-city',
                    'class' => 'form-control fs-4',
                    'placeholder' => "Ville d'arrivée",
                    'list' => 'cities'
                ],
            ])
            ->add('date_depart', DateType::class, [
                'widget' => 'single_text',
                'label' => "Date de départ",
                'attr' => [
                    'id' => 'departuredate',
                    'class' => 'form-control fs-4',
                    'placeholder' => 'Date de départ',
                ],
            ])
            ->add('date_arrivee', DateType::class, [
                'widget' => 'single_text',
                'label' => "Date d'arrivée",
                'attr' => [
                    'id' => 'arrivaldate',
                    'class' => 'form-control fs-4',
                    'placeholder' => "Date d'arrivée",
                ],
            ])
            ->add('nombre_passagers', IntegerType::class, [
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
