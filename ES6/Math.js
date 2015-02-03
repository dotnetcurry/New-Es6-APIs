//traceur --out ES5/Math.js --script ES6/Math.js

console.log(Math.log10(20));
console.log(Math.log2(8));
console.log(Math.log1p(1.718));
console.log(Math.expm1(6));

console.log(Math.sinh(1));
console.log(Math.cosh(2));
console.log(Math.tanh(3));

console.log(Math.asinh(1.175));
console.log(Math.acosh(1.543));
console.log(Math.atanh(0.761));

console.log(Math.hypot(6, 8));
console.log(Math.trunc(20.761));

console.log(Math.sign(-0));
console.log(Math.sign(0));
console.log(Math.sign(-20));
console.log(Math.sign(2990));
console.log(Math.sign(1/0));
console.log(Math.sign(-1/0));