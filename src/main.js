import './style.css';

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#000000');
}
