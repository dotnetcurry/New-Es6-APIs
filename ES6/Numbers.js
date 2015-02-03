//traceur --out ES5/Numbers.js --script ES6/Numbers.js

var octal = 0o16;
console.log(octal);

var octalFromString = Number("0o20");
console.log(octalFromString);

var binary = 0b1100;
console.log(binary);

var binaryFromString = Number("0b11010");
console.log(binaryFromString);

console.log(Number.parseInt("182"));
console.log(Number.parseFloat("817.12"));

console.log(Number.isNaN("10"));
console.log(Number.isNaN(10));

console.log(Number.isFinite("10"));
console.log(Number.isFinite("x19"));

console.log(Number.isInteger("10"));
console.log(Number.isInteger(19));
