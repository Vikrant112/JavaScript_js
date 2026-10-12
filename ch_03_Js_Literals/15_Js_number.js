//Topic : all number types in JS

//in JS, numbers are always type of number (except BigInt), there is no separate type for integers and floats. All numbers are represented as floating point values (double precision 64-bit binary format IEEE 754).

//1. Integer Literals

let decimal = 42;
console.log ("decimal", decimal); // 42

// Binary 

let binary = 0b101010; // binary literal
console.log ("binary", binary); // 42

// octal base

let octal = 0o52; // octal literal
console.log ("octal", octal); // 42

//hexadecimal base

let hexadecimal = 0x2A;
console.log ("hexadecimal", hexadecimal); // 42

//2. Floating Point Literals

let float = 3.14;
let float2 = -0.5;
let float3 = .5; // 0.5
let float4 = 5.; // 5.0

// exponential notation
let exp1 = 1.5e3; // 1.5 * 10^3 = 1500
let exp2 = 2.5e-3; // 2.5 * 10^-3 = 0.0025
console.log ("exp1", exp1); // 1500
console.log ("exp2", exp2); // 0.0025

// Numeric sepration

let million = 1_000_000; // 1 million
let billion = 1_000_000_000;
let hexSep = 0xFF_FF_FF; // 16777215

// BIGINT

let bigInt = 1234567890123456789012345678901234567890n;
let big2 = BigInt(1234567890123456789012345678901234567890);
let bigFromNum = BigInt(42);

console.log("bigInt", bigInt);
console.log("BigInt from String", big2);
console.log("BigInt from Number", bigFromNum);

console.log("Type of bigInt", typeof bigInt); // "bigint"

