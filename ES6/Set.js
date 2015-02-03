//traceur --out ES5/Set.js --script ES6/Set.js
var setOfObjects = new Set([17, 19, 38, 82, 17]);

setOfObjects.add(4);
setOfObjects.add(45);
setOfObjects.add(18);
setOfObjects.add(27);
setOfObjects.add(10);

var obj={prop:45};
setOfObjects.add(obj);

/*for(let item of setOfObjects){
    console.log(item);
}*/

console.log(setOfObjects.has(obj));       //true
console.log(setOfObjects.has({prop:45})); //false

obj = null;

console.log(setOfObjects.has(10));
console.log(setOfObjects.has(100));
console.log(setOfObjects);

console.log("Using forEach");
setOfObjects.forEach(item => console.log(item));

setOfObjects.delete(obj);
setOfObjects.clear();

for(let item of setOfObjects.values()){
    console.log(item.length);
}

setOfObjects.delete(10);
console.log(setOfObjects.has(10));

console.log('After deleting...');
for(let item of setOfObjects.values()){
    console.log(item);
}

console.log('Using keys()...');
for(let item of setOfObjects.keys()){
    console.log(item);
}

console.log('Using entries()...');
for(let item of setOfObjects.entries()){
    console.log(item.length);
}
