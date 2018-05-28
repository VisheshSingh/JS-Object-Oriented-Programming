//Create Method
// Object.create(prototypeObject, propertyObject)
let myObj = Object.create(Object.prototype);
console.dir(Object);
console.dir(myObj);

const Car = function(color) {
  this.color = color;
};

const car1 = new Car("red");
const car2 = Object.create(Car.prototype);

console.dir(car1);
console.dir(car2);
