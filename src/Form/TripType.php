<?php
// src/Form/TripType.php

namespace App\Form;

use App\Entity\Trip;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TripType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('villeDepart', TextType::class, [
                'attr' => ['class' => 'autocomplete', 'data-type' => 'depart'],
            ])
            ->add('villeArrivee', TextType::class, [
                'attr' => ['class' => 'autocomplete', 'data-type' => 'arrivee'],
            ])
            ->add('dateDepart', DateTimeType::class, [
                'widget' => 'single_text',
            ])
            ->add('dateArrivee', DateTimeType::class, [
                'widget' => 'single_text',
                'required' => false,
            ])
            ->add('nombrePassagers', IntegerType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Trip::class,
        ]);
    }
}

