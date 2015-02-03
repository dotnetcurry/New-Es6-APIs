//traceur --out ES5/Strings.js --script ES6/Strings.js

var employeeId = 'E1001';

var getDepartmentApiPath = `/api/department/${employeeId}`;

console.log(getDepartmentApiPath);

var projectId = 'P2001';
var employeeProjectDetailsApiPath = `/api/project/${projectId}/${employeeId}`;

console.log(employeeProjectDetailsApiPath);

var x=20, y=10;

console.log(`${x} + ${y} = ${x+y}`);
console.log(`${x} - ${y} = ${x-y}`);
console.log(`${x} * ${y} = ${x*y}`);
console.log(`${x} / ${y} = ${x/y}`);

var thisIsCool = "Cool! ";
var repeatedString = thisIsCool.repeat(4);
console.log(repeatedString);

console.log(repeatedString.startsWith("Cool! "));
console.log(repeatedString.startsWith("cool! "));

console.log(repeatedString.endsWith("Cool! "));
console.log(repeatedString.endsWith("Cool!"));

if(String.prototype.includes) {
    console.log(repeatedString.includes("Cool! "));
    console.log(repeatedString.includes("Cool! ", 6));
    console.log(repeatedString.includes("Cool! ", 10));
}

if(String.prototype.reverse) {
    console.log(repeatedString.reverse());
}

if(String.prototype.toArray) {
    console.log(repeatedString.toArray());
}

console.log(repeatedString.codePointAt(0));
console.log(String.fromCodePoint(200));

"c\u067e".normalize("NFKC");

