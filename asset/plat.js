$.getJSON("../asset/the_district.json", function(data) {
    var plats = data.plat; // Mettez à jour le nom de la clé

    plats.forEach(function(plat, index) {
        var card = $(".card").eq(index); // Assurez-vous que vous avez des éléments de carte correspondants

        // Mettez à jour le contenu de la carte des plats
        card.find(".plat-img-top").attr("src", "../image/food/" + plat.image); // Mettez à jour le chemin de l'image
        card.find(".plat-title").text(plat.libelle); // Mettez à jour le nom du plat
        card.find(".plat-description").text(plat.description); // Mettez à jour la description du plat
        card.find(".plat-price").text("Prix: " + plat.prix + "€"); // Mettez à jour le prix du plat
    });
});
