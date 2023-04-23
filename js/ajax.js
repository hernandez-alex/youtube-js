"use strict";
(() => {
  const xhr = new XMLHttpRequest();
  const $xhr = document.getElementById("xhr");
  const $fragment = document.createDocumentFragment();

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    console.log(xhr);
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("Éxito");
      console.log(xhr.responseText);
      // $xhr.innerHTML = xhr.responseText;
      let json = JSON.parse(xhr.responseText);
      console.log(json);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $xhr.appendChild($fragment);
    } else {
      console.log("Error");
      let message = xhr.statusText || "Ocurrió un error";
      $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }
    console.log("Este mensaje cargará de cualquier forma");
  });

  // Con datos locales
  // xhr.open("GET", "../l105-ajax/assets/users.json");
  // Usando API Json PlaceHolder
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  //
  xhr.send();
})();
