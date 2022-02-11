console.log("Kong's Output From HW3 Problem 4")



let password = "secret";
let response;
let tries = 0;
let limit = 3;
let error = false;

while(response != password && !error){
     if(tries < limit){
          response = window.prompt("Enter Password");
          tries++;
     } else {
          error = true;
     }
}

if(error){
     alert("You entered maximum amount of tries. Try again later.");
} else {
     alert("You entered the correct password after ${tries} attempt(s)");
}

