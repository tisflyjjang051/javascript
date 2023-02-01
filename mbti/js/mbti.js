const btnStart = document.querySelector(".start .btn");
const start = document.querySelector(".start");
const question = document.querySelector(".question");
btnStart.addEventListener("click", function () {
  start.classList.remove("on");
  question.classList.add("on");
});
