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
                'label' => "Ville de départ"
            ])
            ->add('Ville_arrivee', TextType::class, [
                'label' => "Ville d'arrivée"
            ])
            ->add('date_depart', DateType::class, [
                'widget' => 'single_text',
                'label' => "Date de départ"
            ])
            ->add('date_arrivee', DateType::class, [
                'widget' => 'single_text',
                'label' => "Date d'arrivée"
            ])
            ->add('nombre_passagers', IntegerType::class, [
                'label' => 'Passagers'
            ]);
    }
}