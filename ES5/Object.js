var obj = {employeeId: 100};
var obj2 = obj;
console.log(Object.is(obj, {employeeId: 100}));
console.log(Object.is(obj, obj2));
var obj3 = {departmentName: "Accounts"};
var obj4 = {};
Object.assign(obj4, obj, obj3);
console.log(obj4);
