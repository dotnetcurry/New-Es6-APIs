//traceur --out ES5/WeakMap.js --script ES6/WeakMap.js

var myWeakDictionary = new WeakMap([[{key: "key1"}, "value1"], [{key: "key2"}, "value2"]]);

var key3Obj = {key:"key3"};
var key4Obj={key:"key4"};

myWeakDictionary.set(key3Obj, "value3");
myWeakDictionary.set(key4Obj, "Some New Value");

console.log(myWeakDictionary.get({key: "key1"}));
console.log(myWeakDictionary.get(key4Obj));

console.log(myWeakDictionary.has(key3Obj));

console.log(myWeakDictionary.delete(key3Obj));