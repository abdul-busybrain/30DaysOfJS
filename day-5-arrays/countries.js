// Level 2
let countries = [
  "Nigeria",
  "Ethiopia",
  "Egypt",
  "South Africa",
  "Kenya",
  "Tanzania",
  "Algeria",
  "Morocco",
  "Angola",
  "Uganda",
  "Dubai",
  "Japan",
];

console.log(countries.slice(1, 11));

console.log(countries.find((element) => element === "Tanzania"));

arr1 = ["a", "b", "c", "d", "e", "f"];
splicing = countries.splice(0, countries.indexOf("Kenya"));
console.log(splicing);
