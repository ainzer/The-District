$.getJSON("../asset/the_district.json", function (data) {
    var plats = data.plat;
  
    // Récupère le conteneur où tu veux ajouter les cartes de plat
    var platContainer = $("#plat-container");

     // Fonction pour générer les cartes
     function generateCards() {
        // Boucle sur chaque plat dans le JSON
        data.plat.forEach(function (plat) {
            // Vérifie si le plat est actif
            if (plat.active === "Yes") {
                // Crée une nouvelle carte avec les données du plat
                var card = $("<div class='col-md-4 d-flex justify-content-center justify-content-md-end mb-5'>" +
                "<div class='card zoom-image'>" +
                "<img src='../image/food/" + plat.image + "' class='plat-img-top card-img' alt='Image du plat'>" +
                "<div class='card-body'>" +
                "<h5 class='plat-title'>" + plat.libelle + "</h5>" +
                "<p class='plat-description'>" + plat.description + "</p>" +
                "<p class='plat-price'>Prix: " + plat.prix + "€</p>" +
                "</div>" +
                "</div>" +
                "</div>");

                // Ajoute la carte au conteneur approprié
                $('#plat-container').append(card);
            }
        });
    }

    // Appelle la fonction pour générer les cartes
    generateCards();
});
