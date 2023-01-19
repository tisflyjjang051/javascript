// 배열
// if(조건) {

// } else if() {

// }
// 반복문
const animals = ["lion", "tiger", "rabbit"];
const myAnimals = animals; // 배열 복사는 좀 다른 방식으로 해야 함...
// console.log("🚀 ~ file: array.js:4 ~ myAnimals", myAnimals); //
// animals.push("dog");
// const popped = animals.pop(); //push
// console.log("🚀 ~ file: array.js:7 ~ popped", popped);
// console.log(typeof animals);
// console.log(myAnimals === animals);
// console.log(animals);
const total = animals.length;
for (let i = 0; i < total; i++) {
  console.log(animals[i]);
}
