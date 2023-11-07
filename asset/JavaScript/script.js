$(document).ready(function () {
    var jsonData; // Variable pour stocker les données JSON une fois chargées

    // Charger le fichier JSON une seule fois
    $.getJSON("../asset/the_district.json", function (data) {
        jsonData = data; // Stocker les données dans la variable jsonData

        // Appeler les différentes fonctions ou sections de code maintenant que les données sont chargées
        loadAndSearch();
        loadCategories();
        loadCategoryPlats();
        loadPlats();
        loadSelectedPlat();
        markActivePage();
        // Ajoute d'autres fonctions si nécessaire
    });

    // Fonction pour marquer la page active dans la barre de navigation
    function markActivePage() {
        var currentPage = window.location.pathname.split("/").pop(); // Obtient le nom de la page à partir de l'URL
        var navLinks = $(".navbar-nav .nav-item a");

        navLinks.each(function () {
            var linkPage = $(this).attr("href");

            if (linkPage === currentPage) {
                $(this).parent().addClass("active");
            }
        });
    }

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
        var categories = jsonData.categorie;
        var categoryContainer = $("#cartesCategories");

        categories.forEach(function (category) {
            var newCard = $("<div class='col-md-4 d-flex justify-content-center justify-content-md-between mb-4'>" +
                "<div class='card zoom-image'>" +
                "<img src='../image/category/" + category.image + "' class='categories-img-top card-img' alt='Image de la carte'>" +
                "<div class='card-body'>" +
                "<h5 class='categories-title'>" + category.libelle + "</h5>" +
                "<span class='badge rounded-pill'></span>" +
                "</div>" +
                "</div>" +
                "</div>");

            categoryContainer.append(newCard);

            var badgeElement = newCard.find(".badge");
            badgeElement.text(category.active === 'Yes' ? 'Yes' : 'No');
            badgeElement.removeClass('text-bg-success text-bg-danger');
            badgeElement.addClass(category.active === 'Yes' ? 'text-bg-success' : 'text-bg-danger');

            if (category.active === 'Yes') {
                newCard.on('click', function () {
                    var nouvellePage = 'platCategorie.php?id=' + category.id_categorie;
                    window.location.href = nouvellePage;
                });
            }
        });
    }

    function loadCategoryPlats() {
        var urlParams = new URLSearchParams(window.location.search);
        var categoryId = urlParams.get('id');

        var categoryPlats = jsonData.plat.filter(function (plat) {
            return plat.id_categorie == categoryId && plat.active === "Yes";
        });

        if (categoryPlats.length > 0) {
            categoryPlats.forEach(function (plat) {
                var platCategoryCard = $("<div class='col-md-4 d-flex justify-content-center justify-content-md-end mb-5'>" +
                    "<div class='card zoom-image'>" +
                    "<img src='../image/food/" + plat.image + "' class='plat-img-top card-img' alt='Image du plat'>" +
                    "<div class='card-body'>" +
                    "<h5 class='plat-title'>" + plat.libelle + "</h5>" +
                    "<p class='plat-description'>" + plat.description + "</p>" +
                    "<p class='plat-price'>Prix: " + plat.prix + "€</p>" +
                    "<button class='btn btn-primary btn-commande' data-id='" + plat.id_plat + "'>Commander</button>" +
                    "</div>" +
                    "</div>" +
                    "</div>");

                $('#categoryContent').append(platCategoryCard);
            });
        } else {
            $('#categoryContent').html("<p>Aucun plat actif trouvé pour cette catégorie</p>");
        }
    }

    function loadPlats() {
        var plats = jsonData.plat;
        var platContainer = $("#cartesPlats");

        plats.forEach(function (plat) {
            var platCard = $("<div class='col-md-4 d-flex justify-content-center justify-content-md-end mb-5'>" +
                "<div class='card zoom-image'>" +
                "<img src='../image/food/" + plat.image + "' class='plat-img-top card-img' alt='Image du plat'>" +
                "<div class='card-body'>" +
                "<h5 class='plat-title'>" + plat.libelle + "</h5>" +
                "<p class='plat-description'>" + plat.description + "</p>" +
                "<p class='plat-price'>Prix: " + plat.prix + "€</p>" +
                "<button class='btn btn-primary btn-commande' data-id='" + plat.id_plat + "'>Commander</button>" +
                "</div>" +
                "</div>" +
                "</div>");

            platContainer.append(platCard);
        });

        $(".btn-commande").on("click", function () {
            var platId = $(this).data("id");
            window.location.href = "commande.php?id=" + platId;
        });
    }

    function loadSelectedPlat() {
        var urlParams = new URLSearchParams(window.location.search);
        var platId = urlParams.get('id');

        var plat = jsonData.plat.find(function (item) {
            return item.id_plat == platId;
        });

        if (plat) {
            $("#selectedPlatImage").attr("src", "../image/food/" + plat.image);
            $("#selectedPlatTitle").text(plat.libelle);
            $("#selectedPlatDescription").text(plat.description);
            $("#selectedPlatPrice").text("Prix: " + plat.prix + "€");
        } else {
           console.log("Plat non trouvé.");
        }
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