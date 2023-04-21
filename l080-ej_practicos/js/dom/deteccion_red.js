const d = document;
const w = window;
const n = navigator;

export default function networkStatus() {
  const $div = d.createElement("div");
  const isOnLine = () => {
    if (n.onLine) {
      $div.textContent = "Conexión reestablecida.";
      $div.classList.add("online");
      $div.classList.remove("offline");
    } else {
      $div.textContent = "Conexión perdida.";
      $div.classList.remove("online");
      $div.classList.add("offline");
    }
    d.body.insertAdjacentElement("afterbegin", $div);
    setTimeout(() => {
      // $div.remove();
      d.body.removeChild($div);
    }, 2000);
  };
  w.addEventListener("online", (e) => isOnLine());
  w.addEventListener("offline", (e) => isOnLine());
}
