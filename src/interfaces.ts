interface Vehicle {
  model: string;
  speed?: string;
  //readonly year?: number; // Can be marked as optional/readonly on Interface too

  drive(): void;
}

class Car implements Vehicle {
  constructor(public model: string, public year?: number) {}

  drive() {
    if (this.year) {
      console.log(`Driving a ${this.model} of ${this.year}`);
    } else {
      console.log(`Driving ${this.model}`);
    }
  }
}

let myCar = new Car("Toyota");
let myCar2 = new Car("Mazda", 2012);
myCar.drive();
myCar2.drive();

class Truck implements Vehicle {
  speed: string;

  constructor(public model: string) {
    this.speed = "slow";
  }

  drive() {
    console.log(`Driving a truck! Model: ${this.model}`);
  }
}

function printVehicle(v: Car | Truck) {
  console.log("Model :" + v.model);
  if ("speed" in v) {
    // Check interfaces
    console.log("Speed :" + v.speed);
  }
  if (v instanceof Car) {
    console.log("Year :" + v.year);
  }
}

// Interface as function
interface Addable {
  (num: number, num2: number): number;
}

let addFn: Addable;
addFn = (x: number, y: number) => x + y;
