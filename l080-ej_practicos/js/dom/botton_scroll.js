const d = document;
const w = window;

export default function scrollTopBotton(btn) {
  const $scrollBtn = d.querySelector(btn);

  w.addEventListener("scroll", (e) => {
    // w.pageYOffset = d.documentElement.scrollTop
    // console.log(w.pageYOffset, 0.5 * w.innerHeight);

    w.pageYOffset > 0.5 * w.innerHeight
      ? $scrollBtn.classList.remove("hidden")
      : $scrollBtn.classList.add("hidden");
  });
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      // w.scroll(0, 0);
      w.scrollTo({
        behavior: "smooth",
        top: 0,
        left: 0,
      });
    }
  });
}
