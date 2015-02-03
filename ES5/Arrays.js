var citiesList;
function initCities() {
  citiesList = ["Delhi", "Mumbai", "Kolkata", "Chennai", "Hyderabad", "Bangalore"];
}
initCities();
for (var $__0 = citiesList.entries()[$traceurRuntime.toProperty(Symbol.iterator)](),
    $__1; !($__1 = $__0.next()).done; ) {
  var entry = $__1.value;
  {
    console.log(entry);
  }
}
for (var $__2 = citiesList.keys()[$traceurRuntime.toProperty(Symbol.iterator)](),
    $__3; !($__3 = $__2.next()).done; ) {
  var key = $__3.value;
  {
    console.log(key);
  }
}
console.log(citiesList.find((function(city) {
  return city.startsWith("M");
})));
console.log(citiesList.find((function(city) {
  return city === "New York";
})));
console.log(citiesList.findIndex((function(city) {
  return city.startsWith("M");
})));
console.log(citiesList.findIndex((function(city) {
  return city === "New York";
})));
citiesList.fill("Pune");
console.log(citiesList);
citiesList.fill("Hyderabad", 2);
console.log(citiesList);
citiesList.fill("Bangalore", 3, 5);
console.log(citiesList);
if (Array.prototype.copyWithin) {
  initCities();
  citiesList.copyWithin(0, 3);
  console.log(citiesList);
  initCities();
  citiesList.copyWithin(0, 3, 5);
  console.log(citiesList);
  initCities();
  citiesList.copyWithin(0, -3);
  console.log(citiesList);
}
function convertToArray() {
  return Array.from(arguments);
}
var numbers = convertToArray(19, 72, 18, 71, 37, 91);
console.log(convertToArray(19, 72, 18, 71, 37, 91));
var citiesInUS = Array.of("New York", "Chicago", "Los Angeles", "Seattle");
console.log(Array.of("New York", "Chicago", "Los Angeles", "Seattle"));
