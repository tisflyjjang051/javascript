const comItems = document.querySelectorAll("#com ul li");
const playerItems = document.querySelectorAll("#player ul li");

// 함수의 선언 hoisting
function randomPlay(name, word) {
  console.log("random play");
  console.log(`${name}아~~ 안녕`);
  console.log(`${word}은 먹었니?`);
}

// 함수의 표현
const randomPlay02 = function (name, word) {
  console.log("random play");
  console.log(`${name}아~~ 안녕`);
  console.log(`${word}은 먹었니?`);
};
randomPlay("남진", "아침");
randomPlay("지은", "점심");
randomPlay02("명현", "저녁");
for (let i = 0; i < 3; i++) {
  comItems[i].style.display = "none";
}
comItems[0].style.display = "block";
