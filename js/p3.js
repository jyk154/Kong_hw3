console.log("Kong's Output From HW3 Problem 3")

const input1 = Number(prompt("Enter a number:"));
const input2 = Number(prompt("Enter a number:"));

let operator = prompt("Enter an operator:");
 

 if ((operator) === '+') {
    answer=input1+input2;
 }
 if ((operator) === '-') {
    answer=input1-input2;}
if  ((operator) === '*') {
    answer=input1*input2;
}  if ((operator) === '/') {
    answer=input1/input2;
} if ((operator) === '%') {
    answer=input1%input2;
} 

console.log(answer)



