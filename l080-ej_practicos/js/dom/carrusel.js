const d = document;

export default function slider() {
  const $nextBtn = d.querySelector(".slider-btns .next");
  const $prevBtn = d.querySelector(".slider-btns .prev");
  const $slides = d.querySelectorAll(".slider-slide");

  let i = 0;
  d.addEventListener("click", (e) => {
    $slides[i].classList.remove("active");
    if (e.target === $prevBtn) {
      e.preventDefault();
      i--;
      if (i < 0) i = $slides.length - 1;
    }
    if (e.target === $nextBtn) {
      e.preventDefault();
      i++;
      if (i === $slides.length) i = 0;
    }
    $slides[i].classList.add("active");
  });
}
