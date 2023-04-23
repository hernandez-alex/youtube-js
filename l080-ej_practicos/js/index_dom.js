import scrollTopBotton from "./dom/botton_scroll.js";
import slider from "./dom/carrusel.js";
import countdown from "./dom/cuenta_regresiva.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import searchFilter from "./dom/filtro_busquedas.js";
import getGeolocation from "./dom/geolocalizacion.js";
import hamburguerMenu from "./dom/menu_hamburguesa.js";
import modoOscuro from "./dom/modo_oscuro.js";
import speechReader from "./dom/narrador.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import scrollSpy from "./dom/scroll_espia.js";
import draw from "./dom/sorteo.js";
import { moveBall, shorcuts } from "./dom/teclado.js";
import contactFormValidation from "./dom/validaciones_formularios.js";
import smartVideo from "./dom/video_inteligente.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("./assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "feb 12, 2023 19:57:55", "Feliz Cumpleaños 🤗️");
  scrollTopBotton(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href="https://youtu.be/nxMMElT61A8" target="_blank">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/nxMMElT61A8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/dre8cAAAyZR2342z8" target="_blank">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1116.586403692777!2d-68.16658859462352!3d10.003946883631542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8087823cf2d80b%3A0xe997d2a8b194c079!2sMonumento%20Campo%20de%20Carabobo!5e1!3m2!1ses!2sve!4v1677110505120!5m2!1ses!2sve" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );

  // Desactive ↓ ESTA LINEA ↓ problemas con envio de formulario seccion 14
  // responsiveTester("responsive-tester");

  userDeviceInfo("user-device");
  webCam("webcam");
  getGeolocation("geolocation");
  searchFilter(".card-filter", ".card");
  draw("#winner-btn", ".player");
  slider();
  scrollSpy();
  smartVideo();
  contactFormValidation();
});

d.addEventListener("keydown", (e) => {
  shorcuts(e);
  moveBall(e, ".ball", ".stage");
});

// La línea de código a continuación salio del addEvenListener ya que tambien hacia un llamado al evento DOMContentLoaded, y no se puede hacer dos llamados simultaneos a este evento por que geraría un conflicto ens este caso no se ejecuta el código...
modoOscuro(".dark-mode-btn", "dark-mode");

// La función networkStatus no necesita cargarse en el DOMContentLoaded
networkStatus();
speechReader();
