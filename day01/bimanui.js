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
  //console.log("π ~ file: biman.js:8 ~ biman", biman);
  if (biman <= 18.5) {
    result.textContent = "μ μ²΄μ€";
  } else if (biman > 22.9) {
    result.textContent = "λΉλ§";
  } else {
    result.textContent = "μ μ";
  }
});
// 90μ΄μ A , 80μ΄μμ΄λ©΄ B, 70μ΄μμ΄λ©΄ C 60μ΄μμ΄λ©΄ D  F
