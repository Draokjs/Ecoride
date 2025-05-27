<?php
$dsn = 'mysql:host=localhost;dbname=connexion';
$username = 'user-php';
$password = 'Pecheurdu34..';

try {
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Récupérer les utilisateurs
    $query = "SELECT * FROM users";
    $stmt = $pdo->query($query);
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Afficher les utilisateurs
    foreach ($users as $user) {
        echo "ID : " . htmlspecialchars($user['userid']) . "<br>";
        echo "Nom : " . htmlspecialchars($user['nom']) . "<br>";
        echo "Prenom : " . htmlspecialchars($user['prenom']) . "<br>";
        echo "Email : " . htmlspecialchars($user['email']) . "<br>";
        echo "Password : " . htmlspecialchars($user['password']) . "<br>";
        echo "<br>";
    }
} catch (PDOException $e) {
    echo "Erreur de connexion à la base de données : " . htmlspecialchars($e->getMessage());
}

