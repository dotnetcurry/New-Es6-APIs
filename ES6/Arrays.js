//traceur --out ES5/Arrays.js --script ES6/Arrays.js

var citiesList;

function initCities(){
    citiesList = ["Delhi", "Mumbai", "Kolkata", "Chennai", "Hyderabad", "Bangalore"];
}

initCities();

for(let entry of citiesList.entries()){
    console.log(entry);
}

for(let key of citiesList.keys()){
    console.log(key);
}

console.log(citiesList.find( city => city.startsWith("M") ));
console.log(citiesList.find( city => city === "New York" ));

console.log(citiesList.findIndex( city => city.startsWith("M") ));
console.log(citiesList.findIndex( city => city === "New York" ));

citiesList.fill("Pune");
console.log(citiesList);

citiesList.fill("Hyderabad", 2);
console.log(citiesList);

citiesList.fill("Bangalore", 3, 5);
console.log(citiesList);

if(Array.prototype.copyWithin) {
    initCities();

    citiesList.copyWithin(0, 3);    //elements at 0 to 2 into elements from 3 onwards
    console.log(citiesList);

    initCities();
    citiesList.copyWithin(0, 3, 5); //elements at 0 to 2 into elements from 3 to 5
    console.log(citiesList);

    initCities();
    citiesList.copyWithin(0, -3);   //negative index starts from end of the array
    console.log(citiesList);
}

function convertToArray(){
    return Array.from(arguments);
}
var numbers = convertToArray(19, 72, 18, 71, 37, 91);
console.log(convertToArray(19, 72, 18, 71, 37, 91));

var citiesInUS= Array.of("New York", "Chicago", "Los Angeles", "Seattle");
console.log(Array.of("New York", "Chicago", "Los Angeles", "Seattle"));