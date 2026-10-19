// Theme: an inline snippet in <head> applies the saved theme before paint;
// this wires up the toggle button and keeps it in sync.
(function () {
    const root = document.documentElement;
    const themeBtn = document.querySelector(".theme-btn");

    function currentTheme() {
        if (root.dataset.theme) return root.dataset.theme;
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    function syncLabel() {
        if (!themeBtn) return;
        const next = currentTheme() === "dark" ? "light" : "dark";
        themeBtn.setAttribute("aria-label", "Switch to " + next + " theme");
    }

    // Make the attribute explicit so CSS icon swaps work for system-dark users too
    root.dataset.theme = currentTheme();
    syncLabel();

    if (themeBtn) {
        themeBtn.addEventListener("click", function () {
            const next = currentTheme() === "dark" ? "light" : "dark";
            root.dataset.theme = next;
            try { localStorage.setItem("theme", next); } catch (e) { /* storage unavailable */ }
            syncLabel();
        });
    }

    // Mobile navigation
    const nav = document.querySelector(".nav");
    const menuBtn = document.querySelector(".menu-btn");
    if (nav && menuBtn) {
        menuBtn.addEventListener("click", function () {
            const open = nav.classList.toggle("open");
            menuBtn.setAttribute("aria-expanded", String(open));
        });
        nav.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && nav.classList.contains("open")) {
                nav.classList.remove("open");
                menuBtn.setAttribute("aria-expanded", "false");
                menuBtn.focus();
            }
        });
        nav.querySelectorAll("ul a").forEach(function (link) {
            link.addEventListener("click", function () {
                nav.classList.remove("open");
                menuBtn.setAttribute("aria-expanded", "false");
            });
        });
    }
})();
