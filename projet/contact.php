<?php
include 'header.php'; ?>

<div class="container mt-5">
<form id="contactForm" action="contact_script.php" method="post">
        <div class="form-group col-md-6">
            <label for="nom">Nom :</label>
            <input type="text" class="form-control" id="nom" required>
        </div><br>

        <div class="form-group col-md-6">
            <label for="prenom">Prénom :</label>
            <input type="text" class="form-control" id="prenom" required>
        </div><br>

        <div class="form-group col-md-6">
            <label for="email">Email :</label>
            <input type="email" class="form-control" id="email" placeholder="toto.toto@gmail.com" required>
        </div><br>

        <div class="form-group col-md-6">
            <label for="telephone">Téléphone :</label>
            <input type="tel" class="form-control" id="telephone" required>
        </div><br>

        <div class="form-group">
            <label for="demande">Votre demande :</label>
            <textarea class="form-control" id="demande" rows="4" placeholder="Expliquez votre demande ici"></textarea>
        </div><br>

        <button type="submit" class="btn btn-primary mt-2 btn-mod">Envoyer</button>
        <button type="reset" class="btn btn-primary mt-2 btn-mod">Effacer</button>
    </form>
</div>






<?php include 'footer.php'; ?>



<!-- <form id="contactForm" action="contact_script.php">
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="nom">Nom</label>
                <input type="text" class="form-control" id="nom" placeholder="Votre nom">
            </div>
            <div class="form-group col-md-6">
                <label for="prenom">Prénom</label>
                <input type="text" class="form-control" id="prenom" placeholder="Votre prénom">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Votre email">
            </div>
            <div class="form-group col-md-6">
                <label for="telephone">Téléphone</label>
                <input type="tel" class="form-control" id="telephone" placeholder="Votre téléphone">
            </div>
        </div>
        <div class="form-group">
            <label for="demande">Votre demande</label>
            <textarea class="form-control" id="demande" rows="4" placeholder="Expliquez votre demande ici"></textarea>
        </div>
        <button type="submit" class="btn btn-primary mt-2 btn-mod">Envoyer</button>
        <button type="reset" class="btn btn-primary mt-2 btn-mod">Effacer</button>
    </form>
</div> -->

<!-- ... (le reste de votre contenu reste inchangé) ... -->