const d = document;
const ls = localStorage;
const $btnModo = d.querySelector(".dark-mode-btn");

export default function modoOscuro(btn, classDark) {
  const $selectors = d.querySelectorAll("[data-dark]");
  const lightMode = () => {
    $selectors.forEach((el) => {
      el.classList.remove(classDark);
      $btnModo.innerHTML = "🌛️";
    });
  };
  const darkMode = () => {
    $selectors.forEach((el) => {
      el.classList.add(classDark);
      $btnModo.innerHTML = "🌝️";
    });
  };
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn) && $btnModo.textContent === "🌝️") {
      lightMode();
      ls.setItem("theme", "light");
    } else if (e.target.matches(btn) && $btnModo.textContent === "🌛️") {
      darkMode();
      ls.setItem("theme", "dark");
    }
  });

  d.addEventListener("DOMContentLoaded", (e) => {
    if (ls.getItem("theme") === null) ls.setItem("theme", "light");
    if (ls.getItem("theme") === "light") lightMode();
    if (ls.getItem("theme") === "dark") darkMode();
  });
}
