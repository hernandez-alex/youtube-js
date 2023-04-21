const d = document;
let x = 0;
let y = 0;

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball);
  const $stage = d.querySelector(stage);
  const limitsBall = $ball.getBoundingClientRect();
  const limitsStage = $stage.getBoundingClientRect();
  // console.log(`e.keyCode :`, e.keyCode, `e.key :`, e.key);
  // console.log(
  //   `ball(L:${limitsBall.left.toFixed()},R:${limitsBall.right.toFixed()}),T:${limitsBall.top.toFixed()}),B:${limitsBall.bottom.toFixed()})`
  // );
  // console.log(
  //   `stage(L:${limitsStage.left.toFixed()},R:${limitsStage.right.toFixed()}),T:${limitsStage.top.toFixed()}),B:${limitsStage.bottom.toFixed()})`
  // );
  switch (e.keyCode) {
    case 37:
      if (limitsBall.left - limitsStage.left > 10) {
        e.preventDefault();
        x--;
      }
      break;
    case 38:
      if (limitsBall.top - limitsStage.top > 10) {
        e.preventDefault();
        y--;
      }
      break;
    case 39:
      if (limitsStage.right - limitsBall.right > 10) {
        e.preventDefault();
        x++;
      }
      break;
    case 40:
      if (limitsStage.bottom - limitsBall.bottom > 10) {
        e.preventDefault();
        y++;
      }
      break;
    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
  // console.log(`(x-${x},y-${y})`);
}

export function shorcuts(e) {
  // console.log(`e.key :`, e.key);
  // console.log(`e.type :`, e.type);
  // console.log(`e.keyCode :`, e.keyCode);
  // console.log(`e.ctrlKey :`, e.ctrlKey);
  // console.log(`e.altKey :`, e.altKey);
  // console.log(`e.shiftKey :`, e.shiftKey);
  // console.log(`e :`, e);
  if (e.key === "a" && e.altKey) {
    alert("Haz lanzado una alerta con el teclado.");
  }
  if (e.key === "c" && e.altKey) {
    confirm("Haz lanzado un confirm con el teclado.");
  }
  if (e.key === "p" && e.altKey) {
    prompt("Haz lanzado un prompt con el teclado.");
  }
}
