const d = document;
const w = window;

export default function responsiveMedia(id, mq, mobileContent, desktopContent) {
  let breakPoint = w.matchMedia(mq);

  const responsive = (e) => {
    if (e.matches) {
      d.getElementById(id).innerHTML = desktopContent;
    } else {
      d.getElementById(id).innerHTML = mobileContent;
    }
  };

  breakPoint.addEventListener("change", responsive);
  // Hacemos un llamado a la función puesto que no se ejecuta directamente al cargar si no la lalmamos, puesto que la media query solo se ejecuta cuando la función detecta una variación en la media query mq
  responsive(breakPoint);
}
