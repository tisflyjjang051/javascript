// 크리스 마스
function addZero(num) {
  if (num < 10) {
    return "0" + num;
  }
  return "" + num;
}
const time = document.querySelector(".time");

function remainTime(year, month, date) {
  const end = new Date(year, month - 1, date - 1, 23, 59, 59);
  const now = new Date();
  const remainTime = end.getTime() - now.getTime();
  const sec = addZero(parseInt(remainTime / 1000) % 60);
  const min = addZero(parseInt(remainTime / 1000 / 60) % 60);
  const hour = addZero(parseInt(remainTime / 1000 / 60 / 60) % 24);
  const day = addZero(parseInt(remainTime / 1000 / 60 / 60 / 24));
  time.textContent = `${day} day  ${hour} : ${min} : ${sec}`;
  //console.log("🚀 ~ file: countDown.js:6 ~ sec", sec);
}
setInterval(remainTime, 1000, 2023, 12, 25);
