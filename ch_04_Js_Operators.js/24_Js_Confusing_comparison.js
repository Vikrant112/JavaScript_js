// Rule of thumb:
// == loose equality
// === strict equality

// 1 Empty string vs 0 vs "0" (transitivity broken concept)

console.log("" == 0); // true
console.log("0" == 0); // true
console.log("" == "0"); //false
// transitivity broken => coerced

// always use === => fixes it

console.log("" === 0); //false
console.log("0" === 0); // false
console.log("" === "0"); // false
