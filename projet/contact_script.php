<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST["nom"];
    $prenom = $_POST["prenom"];
    $email = $_POST["email"];
    $telephone = $_POST["telephone"];
    $demande = $_POST["demande"];

    // Créer le nom du fichier avec le format AAAA-MM-JJ-HH-MM-SS.txt
    $filename = date("Y-m-d-H-i-s") . ".txt";

    // Concaténer les données dans une chaîne
    $data = "Nom: $nom\nPrénom: $prenom\nEmail: $email\nTéléphone: $telephone\nDemande: $demande\n";

    // Enregistrer les données dans le fichier
    file_put_contents($filename, $data);

    echo "Formulaire soumis avec succès!";
} else {
    echo "Une erreur s'est produite lors de la soumission du formulaire.";
}
?>
