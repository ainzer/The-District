$(document).ready(function () {
    function loadAndSearch() {
        $.getJSON("../asset/the_district.json", function (data) {
            function handleSearch(input) {
                var matchingCategories = data.categorie.filter(function (categorie) {
                    return categorie.libelle.toLowerCase().includes(input.toLowerCase());
                });

                // Mettre à jour la liste des suggestions visuelles et activer l'autocomplétion
                updateSearchResults(matchingCategories);
            }

            function updateSearchResults(results) {
                $("#searchInput").autocomplete({
                    source: results.map(function (categorie) {
                        return categorie.libelle;
                    }),
                    select: function (event, ui) {
                        // Gérer la sélection d'une catégorie
                        var selectedCategorie = data.categorie.find(function (categorie) {
                            return categorie.libelle === ui.item.label;
                        });
                        // Faire quelque chose avec la catégorie sélectionnée, par exemple, rediriger vers sa page
                        window.location.href = "platCategorie.html?id=" + selectedCategorie.id_categorie;
                    },
                });
            }

            var searchInput = $("#searchInput");
            searchInput.on("input", function () {
                var inputValue = searchInput.val();
                handleSearch(inputValue);
            });
        });
    }

    loadAndSearch();
});
