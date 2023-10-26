$.getJSON("../asset/the_district.json", function(data) {
  var categories = data.categorie;

  categories.forEach(function(category, index) {
      var card = $(".card").eq(index);

      // Mettez à jour le contenu de la carte des catégories
      card.find(".categories-img-top").attr("src", "../image/category/" + category.image); // Mettez à jour le chemin de l'image
      card.find(".categories-title").text(category.libelle); // Mettez à jour le nom de la catégorie
  });
});