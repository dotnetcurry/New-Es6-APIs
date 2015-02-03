//traceur --out ES5/Proxy.js --script ES6/Proxy.js

var employee={
    employeeId: 'E10101',
    name:"Hari",
    city:"Hyderabad",
    age: 28,
    salary: 10000,
    calculateBonus(){
        return this.salary * 0.1;
    }
};

var employeeProxy = new Proxy(employee, {
    get(target, property){
        if(property === "salary"){
            return `$ ${target[property]}`;
        }
        return target[property];
    },
    set(target, property, value){
        if(property === "employeeId"){
            console.error("employeeId cannot be modified");
        }
        else{
            target[property] = value;
        }
    }
});

console.log(employeeProxy.salary);

employeeProxy.employeeId = "E0102";

employee.calculateBonus = new Proxy(employee.calculateBonus, {
    apply(target, context, args){
        if(context.salary < 15000){
            return 0;
        }
        return target.apply(context, args);
    }
});

console.log(employee.calculateBonus());

employee.salary=16000;
console.log(employee.calculateBonus());