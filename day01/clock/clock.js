const time = document.querySelector(".time");
// function hello(name, callback) {
//   console.log("name===", name);
//   callback();
// }
// const myCallBack = function () {
//   console.log("나는 callback 함수입니다.");
// };
// hello("장성호", function () {
//   console.log("나는 callback 함수입니다.");
// });
// hello("남진", myCallBack);

setInterval(makeTime, 1000);
function addZero(num) {
  if (num < 10) {
    return "0" + num;
  }
  return "" + num;
}
function makeTime() {
  const now = new Date();
  const hour = addZero(now.getHours());
  const min = addZero(now.getMinutes());
  const sec = addZero(now.getSeconds());
  // if (hour < 10) {
  //   hour = "0" + hour;
  // }
  // if (min < 10) {
  //   min = "0" + min;
  // }
  // if (sec < 10) {
  //   sec = "0" + sec;
  // }
  time.textContent = `${hour} : ${min} : ${sec}`;
}
