const inputKor = document.querySelector(".kor");
const inputEng = document.querySelector(".eng");
const inputMath = document.querySelector(".math");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
// type casting  형변환

btn.addEventListener("click", function () {
  const kor = parseInt(inputKor.value);
  const eng = parseInt(inputEng.value);
  const math = parseInt(inputMath.value);
  if (isNaN(kor)) {
    //console.log("입력하지 않았음");
    alert("국어 점수를 입력해 주세요.");
    return;
  }
  if (isNaN(eng)) {
    //console.log("입력하지 않았음");
    alert("영어 점수를 입력해 주세요.");
    return;
  }
  if (isNaN(math)) {
    //console.log("입력하지 않았음");
    alert("수학 점수를 입력해 주세요.");
    return;
  }

  const sum = kor + eng + math;
  console.log("🚀 ~ file: scoreui.js:13 ~ sum", sum);
  const avg = sum / 3;
  console.log("🚀 ~ file: scoreui.js:14 ~ avg", avg);
  if (avg >= 90) {
    score = "A";
  } else if (avg >= 80) {
    score = "B";
  } else if (avg >= 70) {
    score = "c";
  } else if (avg >= 60) {
    score = "D";
  } else {
    score = "F";
  }
  result.textContent = `총점 : ${sum} 평균 : ${avg}  학점 : ${score}`;
});
//es6
