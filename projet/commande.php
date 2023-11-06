<?php include 'header.php'; ?>

<div class="container mt-4">
    <div class="row">
        <div class="col-md-6">
            <div class="card zoom-image">
                <img id="selectedPlatImage" class="plat-img-top card-img" alt="Image du plat">
                <div class="card-body">
                    <h5 class="plat-title" id="selectedPlatTitle"></h5>
                    <p class="plat-description" id="selectedPlatDescription"></p>
                    <p class="plat-price" id="selectedPlatPrice"></p>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <form id="commandeForm">
                <h3>Formulaire de Commande</h3>
                <div class="mb-3">
                    <label for="nom" class="form-label">Nom</label>
                    <input type="text" class="form-control" id="nom" name="nom">
                </div>
                <div class="mb-3">
                    <label for="prenom" class="form-label">Prénom</label>
                    <input type="text" class="form-control" id="prenom" name="prenom">
                </div>
                <div class="mb-3">
                    <label for="adresse" class="form-label">Adresse de livraison</label>
                    <input type="text" class="form-control" id="adresse" name="adresse">
                </div>
                <div class="mb-3">
                    <label for="quantite" class="form-label">Quantité</label>
                    <input type="number" class="form-control" id="quantite" name="quantite" min="1">
                </div>
                <button type="submit" class="btn btn-primary btn-mod">Commander</button>
                <button type="reset" class="btn btn-primary btn-mod"> Effacer</button>
            </form>
        </div>
    </div>
</div>

<?php include 'footer.php'; ?>