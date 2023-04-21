const d = document;

export default function countdown(id, limitDate, finalMessage) {
  const $countdown = d.getElementById(id);
  const countdownDate = new Date(limitDate).getTime();

  let countdownTempo = setInterval(() => {
    const now = new Date().getTime();
    let limitTime = countdownDate - now;
    let days = Math.floor(limitTime / (1000 * 60 * 60 * 24));
    let hoursSF = limitTime % (1000 * 60 * 60 * 24); // Alex
    let hours = Math.floor(hoursSF / (1000 * 60 * 60));
    let minutesSF = hoursSF % (1000 * 60 * 60); // Alex
    let minutes = Math.floor(minutesSF / (1000 * 60));
    let secondsSF = minutesSF % (1000 * 60); // Alex
    let seconds = Math.floor(secondsSF / 1000);

    $countdown.innerHTML = `<h3>Faltan: ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos.</h3>`;

    if (limitTime <= 0) {
      $countdown.innerHTML = `<h3>${finalMessage}</h3>`;
      clearInterval(countdownTempo);
    }
  }, 1000);
}
