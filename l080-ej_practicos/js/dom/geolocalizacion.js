const d = document;
const n = navigator;

export default function getGeolocation(id) {
  const $id = d.getElementById(id);
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximunAge: 0,
  };
  $id.style.textAlign = "left";

  const success = (position) => {
    let coords = position.coords;
    // console.log(position);
    // console.log(coords);
    $id.innerHTML = `
    <p>Tu Posición actual es:</p>
    <ul >
      <li>Latitud: <b>${coords.latitude}</b></li>
      <li>Longitud: <b>${coords.longitude}</b></li>
      <li>Presición: <b>${coords.accuracy}</b></li>
    </ul>
    <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank">Ver en Google Maps</a>
    `;
  };
  const error = (err) => {
    console.error(`(Alex) Error ${err.code}: ${err.message}`);
    $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`;
  };

  n.geolocation.getCurrentPosition(success, error, options);
}
