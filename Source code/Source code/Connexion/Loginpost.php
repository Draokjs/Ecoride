<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Connected</title>
  <link rel="icon" href="Source code/Image/Logo.png" type="favicon">
</head>
<body>

<?php
$dsn = 'mysql:host=localhost;dbname=connexion';
$username = 'user-php';
$password = 'Pecheurdu34..';

try {
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Récupérer les données du formulaire de connexion
    $email = $_POST['email'] ?? null;
    $password = $_POST['password'] ?? null;
    
    if (!$email || !$password) {
        echo "Veuillez remplir tous les champs.";
        exit;
    }

    $emailForm = filter_var($email, FILTER_SANITIZE_EMAIL);
    $passwordForm = $password;
    // Récupérer les utilisateurs
    $query = "SELECT * FROM users WHERE email = :email";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':email', $emailForm);
    $stmt->execute();

    // Vérifier utilisateur existe (email)
    if($stmt->rowCount() == 1){
        $monUser = $stmt->fetch(PDO::FETCH_ASSOC);
        
        // Directly verify the password using password_verify
        if(password_verify($passwordForm, $monUser['password'])){
            echo "Connexion réussie ! Bienvenue " . htmlspecialchars($monUser['pseudo']);
        } else {
            echo "Mot de passe incorrect";
        }
    }
    else{
        echo "L'utilisateur n'existe pas, vérifiez votre email";
    }
} catch (PDOException $e){
    echo "Erreur de connexion à la base de données : " . htmlspecialchars($e->getMessage());
}


?>

</body>
</html>

