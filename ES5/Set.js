var setOfObjects = new Set([17, 19, 38, 82, 17]);
setOfObjects.add(4);
setOfObjects.add(45);
setOfObjects.add(18);
setOfObjects.add(27);
setOfObjects.add(10);
var obj = {prop: 45};
setOfObjects.add(obj);
console.log(setOfObjects.has(obj));
console.log(setOfObjects.has({prop: 45}));
obj = null;
console.log(setOfObjects.has(10));
console.log(setOfObjects.has(100));
console.log(setOfObjects);
console.log("Using forEach");
setOfObjects.forEach((function(item) {
  return console.log(item);
}));
setOfObjects.delete(obj);
setOfObjects.clear();
for (var $__0 = setOfObjects.values()[$traceurRuntime.toProperty(Symbol.iterator)](),
    $__1; !($__1 = $__0.next()).done; ) {
  var item = $__1.value;
  {
    console.log(item.length);
  }
}
setOfObjects.delete(10);
console.log(setOfObjects.has(10));
console.log('After deleting...');
for (var $__2 = setOfObjects.values()[$traceurRuntime.toProperty(Symbol.iterator)](),
    $__3; !($__3 = $__2.next()).done; ) {
  var item$__8 = $__3.value;
  {
    console.log(item$__8);
  }
}
console.log('Using keys()...');
for (var $__4 = setOfObjects.keys()[$traceurRuntime.toProperty(Symbol.iterator)](),
    $__5; !($__5 = $__4.next()).done; ) {
  var item$__9 = $__5.value;
  {
    console.log(item$__9);
  }
}
console.log('Using entries()...');
for (var $__6 = setOfObjects.entries()[$traceurRuntime.toProperty(Symbol.iterator)](),
    $__7; !($__7 = $__6.next()).done; ) {
  var item$__10 = $__7.value;
  {
    console.log(item$__10.length);
  }
}
