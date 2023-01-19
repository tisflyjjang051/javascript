const inputHeight = document.querySelector(".height");
const inputWeight = document.querySelector(".weight");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
btn.addEventListener("click", function () {
  const height = parseFloat(inputHeight.value);
  const weight = parseInt(inputWeight.value);
  const centiHeight = height / 100;
  let biman = weight / (centiHeight * centiHeight);
  biman = Math.round(biman * 10) / 10;
  //console.log("🚀 ~ file: biman.js:8 ~ biman", biman);
  if (biman <= 18.5) {
    result.textContent = "저체중";
  } else if (biman > 22.9) {
    result.textContent = "비만";
  } else {
    result.textContent = "정상";
  }
});
// 90이상 A , 80이상이면 B, 70이상이면 C 60이상이면 D  F
