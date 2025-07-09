<?php
namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use App\Entity\Trip;

class TripType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('villeDepart', TextType::class, [
                'label' => 'Ville de départ',
                'attr' => ['id' => 'departure-city', 'class' => 'form-control'],
            ])
            ->add('villeArrivee', TextType::class, [
                'label' => 'Ville d\'arrivée',
                'attr' => ['id' => 'arrival-city', 'class' => 'form-control'],
            ])
            ->add('dateDepart', DateTimeType::class, [
                'label' => 'Date de départ',
                'widget' => 'single_text',
                'attr' => ['id' => 'departuredate', 'class' => 'form-control'],
            ])
            ->add('dateArrivee', DateTimeType::class, [
                'label' => 'Date d\'arrivée',
                'widget' => 'single_text',
                'required' => false,
                'attr' => ['id' => 'arrivaldate', 'class' => 'form-control'],
            ])
            ->add('nombrePassagers', IntegerType::class, [
                'label' => 'Passagers',
                'attr' => ['id' => 'passengers', 'class' => 'form-control'],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Trip::class,
        ]);
    }
}
