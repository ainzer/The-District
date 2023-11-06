$(document).ready(function () {
    // Récupérer l'ID du plat à partir de l'URL
    var urlParams = new URLSearchParams(window.location.search);
    var platId = urlParams.get('id');

    // Charger le fichier JSON
    $.getJSON("../asset/the_district.json", function (data) {
        var plat = data.plat.find(function (item) {
            return item.id_plat == platId;
        });

        // Afficher les informations du plat sur la page de commande
        if (plat) {
            $("#selectedPlatImage").attr("src", "../image/food/" + plat.image);
            $("#selectedPlatTitle").text(plat.libelle);
            $("#selectedPlatDescription").text(plat.description);
            $("#selectedPlatPrice").text("Prix: " + plat.prix + "€");
        } else {
            console.log("Plat non trouvé.");
        }
    });

    // Gérer le formulaire de commande
    $("#commandeForm").submit(function (event) {
        // Empêcher le comportement par défaut du formulaire (rechargement de la page)
        event.preventDefault();

        // Valider le formulaire
        if (validateForm()) {
            // Récupérer les données du formulaire
            var formData = {
                nom: $("#nom").val(),
                prenom: $("#prenom").val(),
                adresse: $("#adresse").val(),
                quantite: $("#quantite").val()
            };

            // Faire quelque chose avec les données du formulaire (par exemple, les envoyer à un serveur)
            console.log("Formulaire soumis avec succès. Données :", formData);
        } else {
            console.log("Le formulaire n'est pas valide.");
        }
    });

    // Fonction de validation du formulaire
    function validateForm() {
        var nom = $("#nom").val();
        var prenom = $("#prenom").val();
        var adresse = $("#adresse").val();
        var quantite = $("#quantite").val();

        // Vérifier que tous les champs sont remplis
        if (nom && prenom && adresse && quantite) {
            return true;
        } else {
            alert("Veuillez remplir tous les champs du formulaire.");
            return false;
        }
    }
});
