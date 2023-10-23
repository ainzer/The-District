document.addEventListener('DOMContentLoaded', function () {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const body = document.body;
    const themeStyleLink = document.getElementById('theme-style');

    themeToggleBtn.addEventListener('click', function () {
        body.classList.toggle('dark-theme');

        // Basculer entre les feuilles de style en fonction du thème
        const currentTheme = body.classList.contains('dark-theme') ? 'style-dark.css' : 'style-light.css';
        
        themeStyleLink.setAttribute('href', currentTheme);
    });
});
