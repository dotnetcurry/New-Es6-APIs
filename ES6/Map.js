//traceur --out ES5/Map.js --script ES6/Map.js

var myDictionary = new Map([["key1", "value1"], ["key2", "value2"]]);

for(let dictionaryEntry of myDictionary){
    console.log(dictionaryEntry);
}

myDictionary.set("key3", "value4");
myDictionary.set("key2", "value5");

var obj = {id: "1"};

myDictionary.set(obj, 1000);
myDictionary.set(obj, 1900);

myDictionary.set({id: "1"}, 826);

console.log(myDictionary.has("key2"));
console.log(myDictionary.has(obj));
console.log(myDictionary.has({id: "1"}));

console.log(myDictionary.get("key2"));      //value2
console.log(myDictionary.get("key2ii"));    //undefined

console.log(myDictionary.delete({prop: 2000}));  //false
console.log(myDictionary.delete(obj));          //true
console.log(myDictionary.delete("key1"));       //true

//myDictionary.clear();

for(let item of myDictionary.entries()){
    console.log(item);
}

for(let item of myDictionary.values()){
    console.log(item);
}

for(let item of myDictionary.keys()){
    console.log(item);
}

myDictionary.forEach(item => console.log(item));