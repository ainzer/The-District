<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="/image/the_district_brand/favicon.png" type="image/x-icon">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <!-- CDN BOOTSTRAP/CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" /> <!-- CDN FONT-AWESOME -->
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="../asset/style.css">
    <title>The District</title>
</head>

<body class="dark-theme">
    <header>
        <nav class="navbar navbar-expand-lg bg-custom-color">
            <a class="navbar-brand color-title no-hover-color-change fs-1">
                <img class="logo" src="/image/the_district_brand/logo_transparent.png" alt="Logo"
                    class="d-inline-block align-text-center"> The District</a>
            <button class="navbar-toggler color-btn" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link color-heading fs-2" href="accueil.php">Accueil</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link color-heading fs-2" href="categories.php">Catégories</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link color-heading fs-2" href="plats.php">Plats</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link color-heading fs-2" href="contact.php">Contact</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input id="searchInput" class="form-control me-2 mod-search fs-4" type="search"
                        placeholder="Rechercher" aria-label="Search">
                    <button class="btn btn-outline-success color-search" id="searchButton" type="submit">Rechercher</button>
                </form>
                <div id="searchResults"></div>

            </div>
        </nav>
    </header>