$(document).ready(function() {
    // Extraire l'ID de la catégorie de l'URL
    var urlParams = new URLSearchParams(window.location.search);
    var categoryId = urlParams.get('id');

    // Charger le fichier JSON
    $.getJSON("../asset/the_district.json", function(data) {
        // Filtrer les plats correspondant à la catégorie et qui sont actifs
        var categoryPlats = data.plat.filter(function(plat) {
            return plat.id_categorie == categoryId && plat.active === "Yes";
        });

        // Afficher le contenu des plats de la catégorie
        if (categoryPlats.length > 0) {
            categoryPlats.forEach(function(plat) {
                // Créer une carte pour chaque plat
                var platCard = $("<div class='col-md-4 d-flex justify-content-center justify-content-md-end mb-5'>" +
                    "<div class='card zoom-image'>" +
                    "<img src='../image/food/" + plat.image + "' class='plat-img-top card-img' alt='Image du plat'>" +
                    "<div class='card-body'>" +
                    "<h5 class='plat-title'>" + plat.libelle + "</h5>" +
                    "<p class='plat-description'>" + plat.description + "</p>" +
                    "<p class='plat-price'>Prix: " + plat.prix + "€</p>" +
                    "</div>" +
                    "</div>" +
                    "</div>");

                // Ajouter la carte au contenu de la catégorie
                $('#categoryContent').append(platCard);
            });
        } else {
            $('#categoryContent').html("<p>Aucun plat actif trouvé pour cette catégorie</p>");
        }
    });
});
