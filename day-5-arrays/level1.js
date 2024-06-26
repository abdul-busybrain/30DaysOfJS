/**
 * 
    Declare an empty array;
    Declare an array with more than 5 number of elements
    Find the length of your array
    Get the first item, the middle item and the last item of the array
    Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
    Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
    Print the array using console.log()
    Print the number of companies in the array
    Print the first company, middle and last company
    Print out each company
    Change each company name to uppercase one by one and print them out
    Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
    Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
    Filter out companies which have more than one 'o' without the filter method
    Sort the array using sort() method
    Reverse the array using reverse() method
    Slice out the first 3 companies from the array
    Slice out the last 3 companies from the array
    Slice out the middle IT company or companies from the array
    Remove the first IT company from the array
    Remove the middle IT company or companies from the array
    Remove the last IT company from the array
    Remove all IT companies

 */

arr = Array();

arr = [
  "Tijjani",
  "Abdullahi",
  "Haruna",
  "Khareematu",
  "Maimuna",
  "Abubakar",
  "Muhammad",
  "Umar",
];

console.log(arr.length);

console.log(arr[0]);
console.log(arr[4]);
console.log(arr[7]);

let mixedDataTypes = [
  true,
  { job: "Web Developer", stack: "Frontend" },
  48,
  ["baffa", "ameera", "abasiyya"],
];

let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

console.log(itCompanies);

console.log(itCompanies.length);

console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[6]);

console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

itCompanies =
  "Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.";
console.log(itCompanies);

// let itWork = prompt("Type an IT Company, you want to work with");

// if (itCompanies.includes(itWork)) {
//   console.log(itWork);
// } else {
//   console.log(itWork + " is not found");
// }

itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

let filteredCompanies = itCompanies.filter((company) =>
  company.toLocaleLowerCase().includes("o", 2)
);

console.log(filteredCompanies);

console.log(filteredCompanies.sort());

console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(4));
console.log(itCompanies.pop());

itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
let indexToRemove = 3;
itCompanies.splice(indexToRemove, 1);
console.log(itCompanies);

console.log(itCompanies.pop());
console.log(itCompanies.pop());
console.log(itCompanies.pop());
console.log(itCompanies.pop());
console.log(itCompanies.pop());
console.log(itCompanies.pop());
console.log(itCompanies);
