let Car = function() {};

Car.prototype = {
  print() {
    return "I am a Car";
  }
};

let ToyCar = function() {};

ToyCar.prototype = Object.create(Car.prototype);

ToyCar.prototype.print = function() {
  return "I am a toyCar";
};

let ToyTransformer = function() {};

ToyTransformer.prototype = Object.create(ToyCar.prototype);

// ToyTransformer.prototype.print = function() {
//   return "I am a toyTransformer";
// };

let myCar = new Car();
let legoCar = new ToyCar();
let OptimusPrime = new ToyTransformer();

// console.log(myCar.print());
// console.log(legoCar.print());
console.log(OptimusPrime.print());
