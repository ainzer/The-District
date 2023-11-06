$.getJSON("../asset/the_district.json", function (data) {
  var categories = data.categorie;

  // Récupérer le conteneur où tu veux ajouter les cartes de catégorie
  var categoryContainer = $("#cartesCategories");

  // Boucle à travers les catégories
  categories.forEach(function (category) {

    // Créer une nouvelle carte de catégorie
    var newCard = $("<div class='col-md-4 d-flex justify-content-center justify-content-md-between mb-4'>" +
      "<div class='card zoom-image'>" +
      "<img src='../image/category/" + category.image + "' class='categories-img-top card-img' alt='Image de la carte'>" +
      "<div class='card-body'>" +
      "<h5 class='categories-title'>" + category.libelle + "</h5>" +
      "<span class='badge rounded-pill'></span>" +
      "</div>" +
      "</div>" +
      "</div>");

    // Ajouter la nouvelle carte au conteneur
    categoryContainer.append(newCard);

    // Mettre à jour la classe de badge en fonction de l'état de la catégorie
    var badgeElement = newCard.find(".badge");
    badgeElement.text(category.active === 'Yes' ? 'Yes' : 'No');
    badgeElement.removeClass('text-bg-success text-bg-danger');
    badgeElement.addClass(category.active === 'Yes' ? 'text-bg-success' : 'text-bg-danger');


    if (category.active === 'Yes') {
    // Ajouter le gestionnaire d'événements de clic pour rediriger l'utilisateur
    newCard.on('click', function () {

      // Spécifier l'URL de la page vers laquelle tu veux rediriger avec l'ID de la catégorie
      var nouvellePage = 'platCategorie.html?id=' + category.id_categorie;

      // Rediriger l'utilisateur vers la nouvelle page
      window.location.href = nouvellePage;
    });
  } else { 

  }
  });
});