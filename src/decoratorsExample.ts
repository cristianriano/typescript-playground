// Decorator run when the class is defined

// Normal decorator
// function Logger(constructor: Function) {
//   console.log("Logging...");
//   console.log(constructor);
// }

// Decorator Factory
function Logger(logString: string) {
  return (constructor: Function) => {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger("LOG!")
class Thing {
  name = "Sofa";

  constructor() {
    console.log("Creating thing...");
  }
}

function Log(target: any, propertyName: string) {
  console.log("Decorator");
  console.log(target, propertyName); // (constructor, title)
}

class Product {
  @Log
  title: string;
  private _price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  set price(p: number) {
    if (p > 0) {
      this._price = p;
    } else {
      throw new Error("Invalid value");
    }
  }

  calculateTax(percentage: number): number {
    return percentage * this._price;
  }
}
