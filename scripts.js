document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".product-section");

    // Наблюдатель IntersectionObserver
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    // Устанавливаем класс "hidden" и наблюдаем элементы
    sections.forEach(section => {
        section.classList.add("hidden");
        observer.observe(section);
    });

    // Добавляем CSS-анимации через JavaScript
    const css = `
        .hidden {
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.5s ease-in-out;
        }
        .visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;

    const styleElement = document.createElement("style");
    styleElement.type = "text/css";
    styleElement.textContent = css;
    document.head.appendChild(styleElement);
});
