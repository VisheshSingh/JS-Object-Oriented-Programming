let Car = function(color) {
  this.color = color;
};

Car.prototype.getColor = function() {
  return this.color;
};

let redCar = new Car("red");
console.log(redCar.getColor());
