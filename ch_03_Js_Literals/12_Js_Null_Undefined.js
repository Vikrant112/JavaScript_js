//===========================
// JavaScript Null and Undefined
//=============================

// Undefined - A variable that has been declared but has not yet been assigned a value is of type undefined.
// Null - Null is an assignment value. It can be assigned to a variable as a representation of no value.
// a value exists but the developer explicitly assigned  " no value" or emplty
// it is intentially absence of any value

var x;
console.log(x); // undefined

var y = null;
console.log(y); // null


// 1. undefined

let userName; // declared but not assigned
console.log(userName); // undefined
console.log(typeof userName); // undefined  

function greet() {
    // no return statement
}
console.log(greet()); // undefined

let a;
a = 10;
console.log(a); // 10

//2. null
let profilePictue = null;
console.log(profilePictue); // null
console.log(typeof profilePictue); // object