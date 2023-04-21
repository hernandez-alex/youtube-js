const d = document;

export default function contactFormValidation() {
  const $form = d.querySelector(".contact-form");
  const $inputs = d.querySelectorAll(".contact-form [required]");
  $inputs.forEach((input) => {
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    input.insertAdjacentElement("afterend", $span);
    $span.classList.add("contact-form-error", "none");
  });

  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".contact-form [required]")) {
      let $input = e.target;
      let pattern = $input.pattern || $input.dataset.pattern;
      if (pattern && $input.value !== "") {
        let regex = RegExp(pattern);
        // console.log(`SI tiene patrón`, `Campo Llneno:`, $input.value !== "");
        return !regex.exec($input.value)
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }
      if ($input.value === "") {
        d.getElementById($input.name).classList.remove("is-active");
      }
      if (!pattern) {
        return $input.value === ""
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }
    }
  });

  d.addEventListener("submit", (e) => {
    // e.preventDefault();
    // alert(`Enviando formulario...`);
    console.log("inicio del submit");

    const $loader = d.querySelector(".contact-form-loader");
    const $response = d.querySelector(".contact-form-response");

    $loader.classList.remove("none");

    setTimeout(() => {
      $loader.classList.add("none");
      $response.classList.remove("none");
      $form.reset();

      setTimeout(() => {
        $response.classList.add("none");
        console.log(`Final del submit`), 3000;
      });
    }, 3000);
  });
}
