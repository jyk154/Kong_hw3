console.log("Kong's Output From HW3 Problem 1")

let Name = prompt("Please enter your name: ");
let numUnits = prompt("Enter the number of units completed (>= 0): ");

if (Number(numUnits) >= 0) {

   units = Number(numUnits);
   let grade;
   if (units <= 30) {
      grade = "Freshman";
   } else if (units <= 60) {
      grade = "Sophomore";
   } else if (units <= 90) {
      grade = "Junior";
   } else {
      grade = "Senior";
   }
  
   console.log(`Hello ${Name}`);
   console.log(`Your grade standing is ${grade}`);
} else {
   console.log(`${Name} you entered ${numUnits}.  You must enter a number >= 0`);
}