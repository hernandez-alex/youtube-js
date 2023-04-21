const d = document;

export default function draw(btn, selector) {
  const getWinner = (selector) => {
    const $players = d.querySelectorAll(selector);
    const ramdon = Math.floor(Math.random() * $players.length);
    const winner = $players[ramdon];
    console.log($players, ramdon, winner);
    return winner.textContent;
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let result = getWinner(selector);
      alert(result);
      console.log(result);
    }
  });
}

// Manera de hacer un sorteo aleatorio sobre comentaios de una red social, este es un ejemplo con you tube, pero aplica a cualquiera de las redes sola hace falata determinar de manera exacta cual es el selector que guarda el nombre del jugador o participante...
const getWinnerComment = (selector) => {
  const $players = document.querySelectorAll(selector);
  const ramdon = Math.floor(Math.random() * $players.length);
  const winner = $players[ramdon].textContent;
  return `El ganador es: ${winner}`;
};

// getWinnerComment("author-text span.style-scope.ytd-comment-renderer")
