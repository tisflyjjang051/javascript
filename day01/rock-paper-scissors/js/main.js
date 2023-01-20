const jsConfetti = new JSConfetti();

const comItems = document.querySelectorAll("#com ul li");
const playerItems = document.querySelectorAll("#player ul li");
const resultList = document.querySelector("#result ul");
const blocking = document.querySelector(".blocking");
const cover = document.querySelector("#cover");
const btnRestart = document.querySelector("#btnRestart");
let num = 0; // 전역 변수 scope  let, const {}  var function() {}

function appendWinItem() {
  const li = document.createElement("li");
  li.classList.add("win");
  li.textContent = "W";
  resultList.appendChild(li);
}
function appendDrawItem() {
  const li = document.createElement("li");
  li.classList.add("draw");
  li.textContent = "D";
  resultList.appendChild(li);
}
function appendLoseItem() {
  const li = document.createElement("li");
  li.classList.add("lose");
  li.textContent = "L";
  resultList.appendChild(li);
}
function appendItem(classTxt, txt) {
  const li = document.createElement("li");
  li.classList.add(classTxt);
  li.textContent = txt;
  resultList.appendChild(li);
}

function random() {
  for (let i = 0; i < 3; i++) {
    comItems[i].style.display = "none";
  }
  num = parseInt(Math.random() * comItems.length);
  comItems[num].style.display = "block";
}
let count = 0;
let winCount = 0;
let drawCount = 0;
let loseCount = 0;
for (let i = 0; i < playerItems.length; i++) {
  playerItems[i].addEventListener("click", function () {
    blocking.classList.add("on");
    count++;
    clearInterval(idx);
    let idx02 = setTimeout(restart, 1000);

    if (i === num) {
      //비겼을때
      appendItem("draw", "D");
      drawCount++;
    } else if ((i === 0 && num === 2) || (i === 1 && num === 0) || (i === 2 && num === 1)) {
      //이긴경우
      appendItem("win", "W");
      winCount++;
    } else {
      //졌을경우
      appendItem("lose", "L");
      loseCount++;
    }
    if (count >= 3) {
      clearTimeout(idx02);
      //www, wwl,wwd,wdd, 이기는 case
      //LLL,LLW,LLD,LDD  지는 경우
      //DDD,WDL 비기는 경우
      const msg = cover.querySelector(".msg");
      if (winCount >= 2 || (drawCount === 2 && winCount === 1)) {
        msg.textContent = "YOU WIN!!!";
        jsConfetti.addConfetti({
          emojis: ["😋"],
        });
      } else if (loseCount >= 2 || (drawCount === 2 && loseCount === 1)) {
        console.log("완전 짐");
        msg.textContent = "YOU LOSE!!!";
        jsConfetti.addConfetti({
          emojis: ["🥵"],
        });
      } else {
        console.log("완전 비김");
        msg.textContent = "YOU DRAW!!!";
        jsConfetti.addConfetti({
          emojis: ["🙄"],
        });
      }
      cover.classList.add("on");
    }
  });
}
btnRestart.addEventListener("click", function () {
  cover.classList.remove("on");
  count = 0;
  winCount = 0;
  loseCount = 0;
  drawCount = 0;
  const items = resultList.querySelectorAll("li");
  for (let i = 0; i < 3; i++) {
    items[i].remove();
  }
  // items[0].remove();
  // items[1].remove();
  // items[2].remove();
  //resultList.innerHTML = "";
  restart();
});

let idx = setInterval(random, 20);
function restart() {
  blocking.classList.remove("on");
  idx = setInterval(random, 20);
}
let confetti = new Confetti("btnRestart");
