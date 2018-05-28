let toyota = {
  drive() {
    return "Driving Toyota";
  }
};

let camry = {
  drive() {
    return `${super.drive()} camry`;
  },
  wifi() {
    return "Using wifi...";
  }
};

Object.setPrototypeOf(camry, toyota);
console.dir(camry);
console.log(camry.wifi());
console.log(camry.drive());
