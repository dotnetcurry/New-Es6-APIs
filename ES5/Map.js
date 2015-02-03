var myDictionary = new Map([["key1", "value1"], ["key2", "value2"]]);
for (var $__0 = myDictionary[$traceurRuntime.toProperty(Symbol.iterator)](),
    $__1; !($__1 = $__0.next()).done; ) {
  var dictionaryEntry = $__1.value;
  {
    console.log(dictionaryEntry);
  }
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
console.log(myDictionary.get("key2"));
console.log(myDictionary.get("key2ii"));
console.log(myDictionary.delete({prop: 2000}));
console.log(myDictionary.delete(obj));
console.log(myDictionary.delete("key1"));
for (var $__2 = myDictionary.entries()[$traceurRuntime.toProperty(Symbol.iterator)](),
    $__3; !($__3 = $__2.next()).done; ) {
  var item = $__3.value;
  {
    console.log(item);
  }
}
for (var $__4 = myDictionary.values()[$traceurRuntime.toProperty(Symbol.iterator)](),
    $__5; !($__5 = $__4.next()).done; ) {
  var item$__8 = $__5.value;
  {
    console.log(item$__8);
  }
}
for (var $__6 = myDictionary.keys()[$traceurRuntime.toProperty(Symbol.iterator)](),
    $__7; !($__7 = $__6.next()).done; ) {
  var item$__9 = $__7.value;
  {
    console.log(item$__9);
  }
}
myDictionary.forEach((function(item) {
  return console.log(item);
}));
