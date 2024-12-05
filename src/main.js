import './style.css';

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#000000');
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    const isDarkMode = event.matches;
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (isDarkMode) {
        themeColorMeta.setAttribute('content', '#000000');
    } else {
        themeColorMeta.setAttribute('content', '#ffffff');
    }
});
