## 🎓 Contexte pédagogique

Ce projet a été réalisé dans le cadre de l'Évaluation en Cours de Formation (ECF) pour le Titre Professionnel Développeur Web et Web Mobile (TP DWWM) – session 2025 

# 🌿 EcoRide – Plateforme de covoiturage écologique

Projet réalisé dans le cadre du Titre Professionnel Développeur Web et Web Mobile.

## 🚀 Objectif

EcoRide est une application web visant à encourager le covoiturage éco-responsable à travers une interface intuitive et un système de recherche de trajets simple.  
Les trajets proposés se limitent aux déplacements en voiture.

## 🛠️ Stack technique

- **Project preview**: Figma ( maquette web et mobile ) 
- **Front-end** : HTML5, CSS3 (Bootstrap), JavaScript
- **Back-end** : PHP (Symfony 6)
- **Base de données** : PostgreSQL (relationnelle)
- **Déploiement** : Heroku

## 📦 Fonctionnalités principales

- Création de compte utilisateur avec mot de passe sécurisé
- Connexion / déconnexion
- Recherche de covoiturages par ville et date
- Affichage des résultats avec informations du trajet
- Espace personnel pour les utilisateurs connectés
- Interface cohérente avec les couleurs de l’écologie

## 🧪 Fonctionnalités en cours / prévues

- Participation à un covoiturage avec vérification du crédit
- Gestion de profils passager / chauffeur
- Création d’un trajet par un chauffeur
- Historique des covoiturages
- Interface d’administration et modération

## 📂 Installation locale

1. Cloner le dépôt :
   ```bash
   git clone https://github.com/ton-utilisateur/ecoride.git
   cd ecoride

## 📂 Installer les dépendances
composer install
npm install
npm run build

## 📂 Configurer la base de données dans .env :
DATABASE_URL="postgresql://u7t0h775hrdh1k:p2e82bb1555d154e6541de1632b575e2fb3ede30081447a8c25f15c4a8b1545ed@c5cnr847jq0fj3.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/db4t4hf5m1qmos?serverVersion=17&charset=utf8"

## 📂 Créer la base + exécuter les migrations :
php bin/console doctrine:database:create
php bin/console doctrine:migrations:migrate
php bin/console doctrine:fixtures:load

## 🌐  Lancer le serveur :
symfony server:start

## 🌐  Accéder à l'app :
http://localhost:8000

## 🌐  Version déployée Heroku :
👉 https://ecoride-symfony-2bb2ba0c858f.herokuapp.com

## 🔐 Accès base de données heroku:



**Sources** 

Test site: https://www.browserstack.com/ &  https://amplitude.com/
Test responsivity: https://responsively.app/
Fonts: https://fonts.google.com/specimen/Roboto & https://www.cdnfonts.com/
Icon: https://ionic.io/ionicons
Test Variable name: https://mothereff.in/js-variables
Test technology: https://caniuse.com/
Color converter code: https://www.rapidtables.com/convert/color/index.html & https://www.code-couleur.com/ & https://colorkit.co/color/19aea3/ & https://webaim.org/resources/contrastchecker/
Bootstrap documentation: https://getbootstrap.com/docs/5.3/getting-started/introduction/ & https://mdbootstrap.com/docs/standard/
Test page speed: https://pagespeed.web.dev/
Image: Chatgpt & https://pixabay.com/images/search/electric%20car%20driving%20nature%20women%20and%20men/
