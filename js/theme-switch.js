export function ThemeSwitch() {
    const themeSwitcher = document.querySelector(".calculator__theme-switch");
    if (!themeSwitcher) return;
    const htmlEl = document.documentElement;

    let theme = localStorage.getItem('theme') ?? 'dark';
    htmlEl.setAttribute('data-theme', theme);

    const toggle = () => {
        const nextTheme = htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        htmlEl.setAttribute('data-theme', nextTheme);
        localStorage.setItem('theme', nextTheme);
    };

    themeSwitcher.addEventListener('click', toggle);
}