console.log("Kong's Output From HW3 Problem 2")

let day= prompt('You Entered:');



switch(day) {
    case "sun":
        x="mon";
        break;
    case "mon":
        x="tue";
        break;
    case "tue":
        x="wed";
        break;
    case "wed":
        x="thu";
        break;
    case "thu":
        x="fri";
        break;
    case "fri":
        x-"sat";
        break;
    case "sat":
        x="sun";
        break;
        
}
console.log('You entered: ${day}');
console.log('The Following Day is: ${x}');


