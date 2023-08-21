var timer = 30;
var score = 0;
var hit = 0;

function getScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
  hit = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hit;
}

function makeBubble() {
  var clutter = "";

  for (var i = 0; i <= 175; i++) {
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }

  document.getElementById("pbottom").innerHTML = clutter;
}

function runTimer() {
  var timerInterval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerInterval);
      document.querySelector("#pbottom").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}

document
  .querySelector("#pbottom")
  .addEventListener("click", function (details) {
    var clickedNumber = Number(details.target.textContent);
    if (clickedNumber === hit) {
      getNewHit();
      makeBubble();
      getScore();
    }
  });

getNewHit();
runTimer();
makeBubble();
