$.getJSON("../asset/the_district.json", function (data) {
    var plats = data.plat;
console.log(plats);
    // Récupérer le conteneur où tu veux ajouter les cartes de plat
    var platContainer = $("#cartesPlats");

    // Boucle à travers les plats
    plats.forEach(function (plat) {
console.log(plat);
        // Créer une nouvelle carte de plat
        var newCard = $("<div class='col-md-4 d-flex justify-content-center justify-content-md-end mb-5'>" +
        "<div class='card zoom-image'>" +
        "<img src='../image/food/" + plat.image + "' class='plat-img-top card-img' alt='Image du plat'>" +
        "<div class='card-body'>" +
        "<h5 class='plat-title'>" + plat.libelle + "</h5>" +
        "<p class='plat-description'>" + plat.description + "</p>" +
        "<p class='plat-price'>Prix: " + plat.prix + "€</p>" +
        // Ajouter un bouton pour rediriger vers la page de commande
        "<button class='btn btn-primary btn-commande' data-id='" + plat.id_plat + "'>Commander</button>" +
        "</div>" +
        "</div>" +
        "</div>");


        // Ajouter la nouvelle carte au conteneur
        platContainer.append(newCard);
    });

      // Ajouter un gestionnaire d'événements pour les boutons de commande
      $(".btn-commande").on("click", function () {
        // Récupérer l'ID du plat associé au bouton cliqué
        var platId = $(this).data("id");

        // Rediriger vers la page de commande avec l'ID du plat en paramètre
        window.location.href = "commande.html?id=" + platId;
    });
});
