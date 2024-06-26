// Level 2
let text = [
  "I",
  " love",
  "teaching",
  "and",
  "empowering",
  "people.",
  "I",
  "teach",
  "HTML,",
  "CSS,",
  " JS,",
  " React,",
  " Python.",
];

console.log(text.join(" "));
console.log(text);
console.log(text.length);

let shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

shoppingCart.unshift("Meat");

shoppingCart.push("Sugar");

let honey = 3;

shoppingCart[3] = "Green Tea";

shoppingCart.splice(4, 1);
console.log(shoppingCart);

frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
backEnd = ["Node", "Express", "MongoDB"];
fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
