// SCUUBA Theme JS
document.addEventListener('DOMContentLoaded', () => {
    const themeToggles = document.querySelectorAll('#themeToggle, #mobileThemeToggle');
    const htmlEl = document.documentElement;

    const savedTheme = localStorage.getItem('scuuba_theme') || 'dark';
    htmlEl.setAttribute('data-theme', savedTheme);

    themeToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const currentTheme = htmlEl.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            htmlEl.setAttribute('data-theme', newTheme);
            localStorage.setItem('scuuba_theme', newTheme);
        });
    });
});
