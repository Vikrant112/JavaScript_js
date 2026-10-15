let num = prompt("Enter a number");
num = Number(num); // convert string to number

if(num % 2 === 0){
    console.log(num + "is even");
}else{
    console.log(num + "is odd");
}

// not working bcz js is created for browser it is work in browser
// need to use nodejs functions.
