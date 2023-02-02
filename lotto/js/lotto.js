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

const lotto = _.shuffle(candidate).filter(function (item, idx) {
  if (idx < 6) {
    return item;
  }
});
const myLotto = _.sortBy(lotto);
console.log("🚀 ~ file: lotto.js:42 ~ myLotto", myLotto);
const paper = document.querySelector(".paper");
// let html = "<ul>";
// myLotto.forEach(function (item, idx) {
//   html += `<li>${item}</li>`;
// });
// html += "</ul>";
const colors = ["yellow", "blue", "red", "gray", "green"];
const html = myLotto.reduce(function (acc, item, idx) {
  const selectColor = Math.ceil(item / 10) - 1;
  if (idx < myLotto.length - 1) {
    return (acc += `<li class="${colors[selectColor]}">${item}</li>`);
  } else {
    return (acc += `<li class="${colors[selectColor]}">${item}</li></ul>`);
  }
}, "<ul>");

console.log("🚀 ~ file: lotto.js:56 ~ html ~ html", html);
paper.innerHTML = html;
