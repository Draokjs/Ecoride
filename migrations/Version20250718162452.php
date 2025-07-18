<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250718162452 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE "user" ADD nom VARCHAR(50) NOT NULL');
        $this->addSql('ALTER TABLE "user" ADD prenom VARCHAR(50) NOT NULL');
        $this->addSql('ALTER TABLE "user" ADD username VARCHAR(50) NOT NULL');
        $this->addSql('ALTER TABLE "user" ADD telephone VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE "user" ADD adresse TEXT DEFAULT NULL');
        $this->addSql('ALTER TABLE "user" ADD date_naissance DATE DEFAULT NULL');
        $this->addSql('ALTER TABLE "user" ALTER roles DROP DEFAULT');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE "user" DROP nom');
        $this->addSql('ALTER TABLE "user" DROP prenom');
        $this->addSql('ALTER TABLE "user" DROP username');
        $this->addSql('ALTER TABLE "user" DROP telephone');
        $this->addSql('ALTER TABLE "user" DROP adresse');
        $this->addSql('ALTER TABLE "user" DROP date_naissance');
        $this->addSql('ALTER TABLE "user" ALTER roles SET DEFAULT \'[]\'');
    }
}
