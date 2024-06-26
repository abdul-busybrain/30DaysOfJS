let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

console.log(ages.sort());
let min = 19;
let max = 0;

for (let i = 0; i <= ages.length; i++) {
  if (ages[i] > max) {
    max = ages[i];
  }
  if (ages[i] < min) {
    max = ages[i];
  }
}
let range = max - min;
console.log(range);

let md1 = ages[4];
let md2 = ages[5];

let mdAge = (md1 + md2) / 2;
console.log(mdAge);

console.log(min, max);

let total = 0;
for (let i = 0; i < ages.length; i++) {
  total += ages[i];
}

let avg = total / ages.length;
console.log(avg);

console.log(min === avg);
console.log(max === avg);
