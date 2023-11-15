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


<div class="container mt-4">
    <div class="row" id="cartesPlats"></div>
    <div class="d-flex justify-content-between">
        <input type="button" id="precedentPlatsButton" class="btn btn-primary mt-2 btn-mod" value="Précédent" disabled>
        <input type="button" id="suivantPlatsButton" class="btn btn-primary mt-2 btn-mod" value="Suivant">
    </div>
</div>


<?php include 'footer.php'; ?>