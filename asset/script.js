$.getJSON("../asset/the_district.json", function(data) {
    var categories = data.categorie; // Mettez à jour le nom de la clé
  
    categories.forEach(function(category, index) {
      var card = $(".card").eq(index);
  
      // Mettez à jour le contenu de la carte
      card.find(".card-img-top").attr("src", "../image/category/" + category.image); // Mettez à jour le chemin de l'image
      card.find(".card-title").text(category.libelle); // Mettez à jour le nom de la catégorie
    });
  });