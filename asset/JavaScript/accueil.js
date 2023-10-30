$(document).ready(function () {
    // Fonction pour charger le fichier JSON et gérer la recherche
    function loadAndSearch() {
        $.getJSON("../asset/the_district.json", function (data) {
            // Fonction pour gérer la recherche
            function handleSearch(input) {
                // Filtrer les plats qui correspondent à la saisie de l'utilisateur
                var matchingPlats = data.plat.filter(function (plat) {
                    return plat.libelle.toLowerCase().includes(input.toLowerCase());
                });
                
                // Mettre à jour la liste des suggestions visuelles
                updateSearchResults(matchingPlats);
            }
            
            // Fonction pour mettre à jour la liste des suggestions visuelles
            function updateSearchResults(results) {
                var resultsContainer = $("#searchResults");
                resultsContainer.empty(); // Efface les résultats précédents

                // Ajoute les nouveaux résultats à la liste
                results.forEach(function (plat) {
                    var resultItem = $("<div>").text(plat.libelle);
                    resultsContainer.append(resultItem);
                });
            }

            // Écouteur d'événements pour la saisie dans la barre de recherche
            var searchInput = $("#searchInput");
            searchInput.on('input', function () {
                var inputValue = searchInput.val();
                handleSearch(inputValue);
            });
        });
    }

    // Appelle la fonction pour charger le fichier JSON et initialiser la recherche
    loadAndSearch();
});
