<?php include 'header.php'; ?>

<div class="container-fluid mt-2 mod-video">
    <div class="row">
        <div class="col-md-12">
            <!-- Ajout d'une div pour la vidéo -->
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="URL_DE_TA_VIDEO" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</div>

<div class="container mt-2">
    <div class="row" id="cartesCategories"></div>
    <div class="d-flex justify-content-between">
    <input type="button" id="precedentButton" class="btn btn-primary mt-2 btn-mod" value="Précédent" disabled>
    <input type="button" id="suivantButton" class="btn btn-primary mt-2 btn-mod" value="Suivant">
</div>

</div>

<?php include 'footer.php'; ?>