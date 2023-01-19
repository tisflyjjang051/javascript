const comItems = document.querySelectorAll("#com ul li");
const playerItems = document.querySelectorAll("#player ul li");
console.log("🚀 ~ file: main.js:3 ~ playerItems", playerItems);
comItems[0].style.display = "none";
comItems[1].style.display = "none";
comItems[2].style.display = "none";

comItems[0].style.display = "block";
let num = 0;
playerItems[0].addEventListener("click", function () {
  clearInterval(idx);
  //이겼는지 졌는지 판별해보기...
  //console.log(num);
  //num을 통해서 컴퓨터의 선택을 알 수 있다.
});
playerItems[1].addEventListener("click", function () {
  clearInterval(idx);
  //이겼는지 졌는지 판별해보기...
});
playerItems[2].addEventListener("click", function () {
  clearInterval(idx);
  //이겼는지 졌는지 판별해보기...
});

const idx = setInterval(function () {
  comItems[0].style.display = "none";
  comItems[1].style.display = "none";
  comItems[2].style.display = "none";
  num++;
  num = num % 3;
  comItems[num].style.display = "block";
}, 20);
