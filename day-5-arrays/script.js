// HOW TO CREATE AN EMPTY ARRAY
let arr = Array();
let arr1 = [];

console.log(arr, arr1);

// how to create array with values
let webTechs = ["HTML", "CSS", "JS"];
console.log(webTechs);

// array can have multiple values
const myArray = [
  "Abdullahi Busybrain",
  "KW/24A/0048",
  { country: "Nigeria", city: "Kano" },
  { skills: ["HTML", "CSS", "JS"] },
];
console.log(myArray);

// creating an array using split
let js = "JavaScript";
const charsInJavaScript = js.split("");
console.log(charsInJavaScript);

let companies = "Google, Amazon, Microsoft, Apple, Samsung, Dell";
const nameOfComapanies = companies.split(",");
console.log(nameOfComapanies);

// accessing array items using index

// modifying an array
let numbers = [1, 2, 10, 20];

numbers[2] = 20;
numbers[4] = 50;
numbers[7] = 80;
numbers[5] = 46;
numbers[6] = 309;
numbers[9] = 9999;
console.log(numbers);
console.log(numbers[(5, 6, 7)]);

// methods to manipulate an array
// Array, length, concat, indexOf, splice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift

// Array: used to create an array
arr = Array();
console.log(arr);
let eightEmptyValues = Array(8);
console.log(eightEmptyValues);

// fill: Fill all the array elements with a static value
arr1 = Array();
console.log(arr1);
eightEmptyValues = Array(8).fill("code");
console.log(eightEmptyValues);

// concat: Merge 2 or more arrays together into  a single array
let fruits = ["banana", "orange", "mango", "lemon", "watermelon"];
let vegetables = ["tomato", "potato", "cabbage"];
let fridge = fruits.concat(vegetables);
console.log(fridge);

// length: Getting array length or the size
console.log(fridge.length);

// indexOf: Check if an item exist in an array. If true, it returns the index, else it returns -1
numbers = [1, 2, 3, 4, 5, 6, 777, 67, 6, 7];
console.log(numbers.indexOf(5));
console.log(numbers.indexOf(3));
console.log(numbers.indexOf(1));
console.log(numbers.indexOf(9));
console.log(numbers.indexOf(777));
console.log(numbers.indexOf(2));

// indexOf2: lets illustrate it with an example
fruits = ["banana", "orange", "mango", "lemon", "watermelon"];
let index = fruits.indexOf("banana");

console.log("Banana is in index: " + index);
if (index === -1) {
  console.log("This fruit does not exits in the array");
} else {
  console.log("This fruit exist in the array");
}

// lastIndexOf: It gives the position of the last item in the array. If it exist, it returns it's index else it returns -1
numbers = [1, 2, 3, 4, 5, 3, 1, 2];
console.log(numbers.lastIndexOf(-1));
console.log(numbers.lastIndexOf(2));
console.log(numbers.lastIndexOf(2));
console.log(numbers.lastIndexOf(4));

// includes: Uses to check if an item exist in an array. If it exist it returns true else it returns false
numbers = [1, 2, 3, 4, 5, 6, 7, 0];
console.log(numbers.includes(9));
console.log(numbers.includes(4));
console.log(numbers.includes(2));
console.log(numbers.includes(0));

webTechs = ["HTML", "CSS", "JAVA", "Python", "JavaScript", "MongoDB", "React"];
console.log(webTechs.includes("node"));
console.log(webTechs.includes("JAVA"));
console.log(webTechs.includes("C#"));
console.log(webTechs.includes("JavaScript"));
console.log(webTechs.includes("HTML"));

// isArray: To check if the data type is an array
console.log(Array.isArray(webTechs));

// toString: Converts an array to string
numbers = [1, 2, 3, 5];
console.log(numbers.toString());

// join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.
let myNames = ["Haji", "Abdullahi", "Auwal", "Haruna"];
console.log(myNames.join());
console.log(myNames.join(""));
console.log(myNames.join(" "));
console.log(myNames.join(","));
console.log(myNames.join(" # "));

// slice: To cut out multiple items in range. It takes 2 parameters, (start and end) positions. It doent include the ending position
numbers = [1, 2, 3, 6, 5, 6, 6, 4, 4533, 3454];
console.log(numbers.slice()); // copies all items
console.log(numbers.slice(0)); // copies all items
console.log(numbers.slice(0, numbers.length)); // copies all items
console.log(numbers.slice(0, numbers.length - 1)); // copies all items - last
console.log(numbers.slice(1, 4)); // it starts with (2) which indexed @ 1 and stopped @ 6 which is indexed @ 4

// splice: It takes 3 parameters: (start, number of times to be removed, number of times to be added)
numbers = [1, 2, 3, 4];
numbers.splice(); // remove all items
console.log(numbers);

numbers.splice(0, 1);
console.log(numbers); // remove the first item

numbers = [1, 2, 3, 4, 5, 6];
numbers.splice(3, 3, 7, 8, 9);
console.log(numbers);

// push: adding item in the end. To add item to the end of an existing array we use the push method.
arr = ["item1", "item2", "item3"];
arr.push("new item");
console.log(arr);
// ['item1', 'item2','item3','new item']

numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers); // -> [1,2,3,4,5,6]

numbers.pop(); // -> remove one item from the end
console.log(numbers); // -> [1,2,3,4,5]

fruits = ["banana", "orange", "mango", "lemon"];
fruits.push("apple");
console.log(fruits); // ['banana', 'orange', 'mango', 'lemon', 'apple']

fruits.push("lime");
console.log(fruits); // ['banana', 'orange', 'mango', 'lemon', 'apple', 'lime']

// pop: Removing item in the end.
numbers = [1, 2, 3, 4, 5];
numbers.pop(); // -> remove one item from the end
console.log(numbers); // -> [1,2,3,4]

// shift: Removing one array element in the beginning of the array.
numbers = [1, 2, 3, 4, 5];
numbers.shift(); // -> remove one item from the beginning
console.log(numbers); // -> [2,3,4,5]

// unshift: Adding array element in the beginning of the array.

numbers = [1, 2, 3, 4, 5];
numbers.unshift(0); // -> add one item from the beginning
console.log(numbers); // -> [0,1,2,3,4,5]

// reverse: reverse the order of an array.

numbers = [1, 2, 3, 4, 5];
numbers.reverse(); // -> reverse array order
console.log(numbers); // [5, 4, 3, 2, 1]

numbers.reverse();
console.log(numbers); // [1, 2, 3, 4, 5]

//sort: arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in the coming sections.
webTechs = ["HTML", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB"];

webTechs.sort();
console.log(webTechs); // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

webTechs.reverse(); // after sorting we can reverse it
console.log(webTechs); // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

// Array can store different data types including an array itself. Let us create an array of arrays
let firstNums = [1, 2, 3];
let secondNums = [1, 4, 9];

let arrayOfArray = [
  [1, 2, 3],
  [1, 2, 3],
];
console.log(arrayOfArray[0]); // [1, 2, 3]

let frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
let backEnd = ["Node", "Express", "MongoDB"];
let fullStack = [frontEnd, backEnd];
console.log(fullStack); // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length); // 2
console.log(fullStack[0]); // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]); // ["Node", "Express",
