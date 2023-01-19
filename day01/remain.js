const money = 136780;
let remain = 0;
const m50000 = parseInt(money / 50000);
remain = money % 50000;
const m10000 = parseInt(remain / 10000);
remain = remain % 10000;
const m5000 = parseInt(remain / 5000);
remain = remain % 5000;
const m1000 = parseInt(remain / 1000);
remain = remain % 1000;
const m500 = parseInt(remain / 500);
remain = remain % 500;
const m100 = parseInt(remain / 100);
remain = remain % 100;
const m50 = parseInt(remain / 50);
remain = remain % 50;
const m10 = parseInt(remain / 10);
console.log(`오만원권 ${m50000} 장 / 만원 ${m10000} 장 / 오천원 ${m5000}`);
// 오만원 2
// 만원 3
// 오천원 1
// 천원 1
// 오백원 1
// 백원 2
// 오십원 1
// 십원 3
