/**
 * Exercises: Level 3

    Write a program which tells the number of days in a month.

 */

let month = prompt("Enter month of the year (January - December)");

if (
  month === "January" ||
  month === "March" ||
  month === "May" ||
  month === "July" ||
  month === "August" ||
  month === "October" ||
  month === "December"
) {
  console.log(`${month} has 31 days`);
} else if (
  month === "September" ||
  month === "April" ||
  month === "June" ||
  month === "November"
) {
  console.log(`${month} has 30 days`);
} else if (month === "February") {
  console.log(`${month} has 28 or 29 days in each leap year`);
} else {
  console.log(`${month} not a valid entry.`);
}
