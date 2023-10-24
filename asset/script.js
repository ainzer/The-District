// Script pour basculer entre les thèmes
function toggleTheme(theme) {
    const body = document.body;

    // Retirer les classes de thème existantes
    body.classList.remove('light-theme', 'dark-theme');

    // Ajouter la classe du nouveau thème
    body.classList.add(`${theme}-theme`);
}
