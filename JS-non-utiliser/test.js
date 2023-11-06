$(document).ready(function () {
    var jsonData;

    $.getJSON("../asset/the_district.json", function (data) {
        jsonData = data;
        loadAndSearch();
        loadCategories();
        loadCategoryPlats();
        loadPlats();
        loadSelectedPlat();
    });

    function loadAndSearch() {
        function performSearch(input) {
            var matchingCategories = jsonData.categorie.filter(function (categorie) {
                return categorie.libelle.toLowerCase().includes(input.toLowerCase());
            });

            updateSearchResults(matchingCategories);
        }

        function updateSearchResults(results) {
            $("#searchInput").autocomplete({
                source: results.map(function (categorie) {
                    return categorie.libelle;
                }),
                select: function (event, ui) {
                    var selectedCategorie = jsonData.categorie.find(function (categorie) {
                        return categorie.libelle === ui.item.label;
                    });
                    console.log("Sélection via Autocomplete");
                    window.location.href = "platCategorie.php?id=" + selectedCategorie.id_categorie;
                },
            });
        }

        $("#searchButton").on("click", function (e) {
            e.preventDefault();
            var inputValue = $("#searchInput").val();
            performSearch(inputValue);
            var selectedCategorie = jsonData.categorie.find(function (categorie) {
                return categorie.libelle.toLowerCase() === $("#searchInput").val().toLowerCase();
            });
            window.location.href = "platCategorie.php?id=" + selectedCategorie.id_categorie;
        });

        $("#searchInput").on("keypress", function (e) {
            if (e.which === 13) {
                e.preventDefault();
                var inputValue = $(this).val();
                performSearch(inputValue);
                var selectedCategorie = jsonData.categorie.find(function (categorie) {
                    return categorie.libelle.toLowerCase() === $("#searchInput").val().toLowerCase();
                });
                window.location.href = "platCategorie.php?id=" + selectedCategorie.id_categorie;
            }
        });
    }

    function loadCategories() {
        // ... (le reste de la fonction loadCategories reste inchangé)
    }

    function loadCategoryPlats() {
        // ... (le reste de la fonction loadCategoryPlats reste inchangé)
    }

    function loadPlats() {
        // ... (le reste de la fonction loadPlats reste inchangé)
    }

    function loadSelectedPlat() {
        // ... (le reste de la fonction loadSelectedPlat reste inchangé)
    }

    function validateContactForm() {
        var nom = $("#nom").val();
        var prenom = $("#prenom").val();
        var email = $("#email").val();
        var telephone = $("#telephone").val();
        var demande = $("#demande").val();

        if (nom && prenom && email && telephone && demande) {
            return true;
        } else {
            alert("Veuillez remplir tous les champs du formulaire de contact.");
            return false;
        }
    }

    $("#contactForm").submit(function (event) {
        event.preventDefault();

        if (validateContactForm()) {
            var contactFormData = {
                nom: $("#nom").val(),
                prenom: $("#prenom").val(),
                email: $("#email").val(),
                telephone: $("#telephone").val(),
                demande: $("#demande").val()
            };

            alert("Formulaire de contact soumis avec succès. Données : " + JSON.stringify(contactFormData));
            // Ajoute ici le code pour envoyer les données du formulaire de contact (contactFormData) à ton serveur PHP si nécessaire.
        } else {
            alert("Le formulaire de contact n'est pas valide.");
        }
    });

    function validateCommandeForm() {
        var nom = $("#nom").val();
        var prenom = $("#prenom").val();
        var adresse = $("#adresse").val();
        var quantite = $("#quantite").val();

        if (nom && prenom && adresse && quantite) {
            return true;
        } else {
            alert("Veuillez remplir tous les champs du formulaire de commande.");
            return false;
        }
    }

    $("#commandeForm").submit(function (event) {
        event.preventDefault();

        if (validateCommandeForm()) {
            var commandeFormData = {
                nom: $("#nom").val(),
                prenom: $("#prenom").val(),
                adresse: $("#adresse").val(),
                quantite: $("#quantite").val()
            };

            alert("Formulaire de commande soumis avec succès. Données : " + JSON.stringify(commandeFormData));
            // Ajoute ici le code pour envoyer les données du formulaire de commande (commandeFormData) à ton serveur PHP si nécessaire.
        } else {
            alert("Le formulaire de commande n'est pas valide.");
        }
    });
});
