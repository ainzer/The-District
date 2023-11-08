<?php
// Attendez 10 secondes avant de rediriger
header("Refresh: 10; URL=accueil.php");
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Merci</title>
    <style>
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh; /* Utilise 100% de la hauteur de la vue (viewport height) */
        }

        h1, p {
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>Merci pour votre soumission!</h1>
    <p>Vous serez redirigé vers la page d'accueil dans 10 secondes.</p>
</body>
</html>
