const comItems = document.querySelectorAll("#com ul li");
const playerItems = document.querySelectorAll("#player ul li");
let num = 0;
function random() {
  for (let i = 0; i < 3; i++) {
    comItems[i].style.display = "none";
  }
  num = parseInt(Math.random() * comItems.length);
  comItems[num].style.display = "block";
}

for (let i = 0; i < playerItems.length; i++) {
  playerItems[i].addEventListener("click", function () {
    clearInterval(idx);
    console.log(i);
    console.log(num);
  });
}
const idx = setInterval(random, 20);
