const candidate = Array(45)
  .fill(0)
  .map(function (item, idx) {
    return idx + 1;
  });
// const candidate = Array(45)
//   .fill(0)
//   .map((item, idx) => idx + 1);

// let a = 10;
// let b = 20;
// let c = a;
// a = b;
// b = a;
let a = 10;
let b = 20;
const obj = { name: "장성호", age: 20 };
const { name, age } = obj;
console.log(name);
[b, a] = [a, b];
console.log(b, "===", a);

// for (let i = 0; i < 100; i++) {
//   const First = parseInt(Math.random() * 45);
//   const Second = parseInt(Math.random() * 45);
//   const num = candidate[First];
//   candidate[First] = candidate[Second];
//   candidate[Second] = num;
// }
// for (let i = 0; i < 100; i++) {
//   const First = parseInt(Math.random() * 45);
//   const Second = parseInt(Math.random() * 45);
//   [candidate[Second], candidate[First]] = [candidate[First], candidate[Second]];
// }

const myLotto = _.shuffle(candidate).filter(function (item, idx) {
  if (idx < 6) {
    return item;
  }
});
console.log("🚀 ~ file: lotto.js:28 ~ myLotto ~ myLotto", _.sortBy(myLotto));
// for (let i = 0; i < 6; i++) {
//   console.log(candidate[i]);
// }
