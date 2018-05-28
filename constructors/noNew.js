"use strict";
let Car = function(color) {
  if (!new.target) throw "Car() must be used with 'new' keyword";
  this.color = color;
};

let redCar = Car("red");
console.log(redCar);
