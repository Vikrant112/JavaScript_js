// Nested Ternary
// Multiple condition
// age = 26
// age>18 => Go Goa, age>25=>Drink

let age = 26;

let is_vikrant_enjoy = (age>18) ?(age>25 ? "Goa & Drink" : "No Drink only Goa") : "No Goa";

console.log(is_vikrant_enjoy);

console.log(`you can enjoy ${is_vikrant_enjoy}`);