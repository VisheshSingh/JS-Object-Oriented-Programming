const Car = function(color) {
  this.color = color;
};

Car.prototype = {
  getColor() {
    return this.color;
  }
};

const ToyCar = function() {};

ToyCar.prototype = Object.create(Car.prototype);

let legoCar = new ToyCar();
console.dir(legoCar);

console.log(legoCar instanceof ToyCar);
console.log(legoCar instanceof Car);
console.log(legoCar instanceof Object);

console.dir(ToyCar.prototype.isPrototypeOf(legoCar));

console.dir(Car.prototype.isPrototypeOf(legoCar));

console.dir(Object.prototype.isPrototypeOf(legoCar));

// In a nutshell Object.create helps you extend a constructor
