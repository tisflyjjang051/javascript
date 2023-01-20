const comItems = document.querySelectorAll("#com ul li");
const playerItems = document.querySelectorAll("#player ul li");
const resultList = document.querySelector("#result ul");
const blocking = document.querySelector(".blocking");
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
for (let i = 0; i < playerItems.length; i++) {
  playerItems[i].addEventListener("click", function () {
    blocking.classList.add("on");
    count++;
    clearInterval(idx);
    let idx02 = setTimeout(restart, 1000);
    if (count >= 3) {
      clearTimeout(idx02);
    }
    if (i === num) {
      //비겼을때
      appendItem("draw", "D");
    } else if ((i === 0 && num === 2) || (i === 1 && num === 0) || (i === 2 && num === 1)) {
      //이긴경우
      appendItem("win", "W");
    } else {
      //졌을경우
      appendItem("lose", "L");
    }
  });
}
let idx = setInterval(random, 20);
function restart() {
  blocking.classList.remove("on");
  idx = setInterval(random, 20);
}
