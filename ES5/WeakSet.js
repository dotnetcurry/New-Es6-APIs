var weakSetCounter = new WeakSet([{prop: 'someValue'}, {prop: 'other value'}, {prop2: "prop2 value"}]);
var obj = {prop: "value"};
weakSetCounter.add(obj);
console.log(weakSetCounter.has({prop: "someValue"}));
console.log(weakSetCounter.has(obj));
