<?php
// Vérification si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération des données du formulaire
    $nom = ($_POST["nom"]);
    $prenom = ($_POST["prenom"]);
    $email = ($_POST["email"]);
    $telephone = ($_POST["telephone"]);
    $demande = ($_POST["demande"]);

    // Création du nom de fichier avec la date et l'heure
    $nomFichier = "contact/" . date("Y-m-d-H-i-s") . ".txt";

    // Ouverture du fichier en écriture
    $fichier = fopen($nomFichier, "w");

    // Écriture des données dans le fichier
    fwrite($fichier, "Nom: $nom\n");
    fwrite($fichier, "Prénom: $prenom\n");
    fwrite($fichier, "Email: $email\n");
    fwrite($fichier, "Téléphone: $telephone\n");
    fwrite($fichier, "Demande: $demande\n");

    // Fermeture du fichier
    fclose($fichier);

    // Affichage d'un message de confirmation
    header("Location: merci.php");
} else {
    // Redirection si le formulaire n'a pas été soumis
    header("Location: accueil.php");
    exit();
}
?>
