let hour = Number(prompt("Enter the hour: "))
let minutes = Number(prompt("Enter the minutes: "))
let seconds = Number(prompt("Enter the seconds: "))


if (
hour >= 0 &&
hour <= 23 &&
minutes >= 0 &&
minutes <= 59 &&
seconds >=0 &&
seconds <= 59
){
    seconds++}

if (seconds === 60){
seconds = 0;
minutes++
}
if (minutes === 60){
minutes = 0;
hour++
}
if (hour === 24){
hour = 0;
}
if (hour===23 && minutes===59 && seconds===59){
hour===0
minutes===0
seconds===0
}




console.log (`A second later ${hour}: ${minutes} : ${seconds}`);

