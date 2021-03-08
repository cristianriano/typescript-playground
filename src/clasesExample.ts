enum Status {
  ACTIVE,
  INACTIVE,
}
class Department {
  private employees: string[] = [];
  protected state: Status;
  // name: string;

  // constructor(n: string) {
  //   this.name = n;
  // }

  // Shorthand init
  constructor(private readonly id: string, public name: string) {
    this.state = Status.INACTIVE;
  }

  // Special notation so no other object can use this method. Is optional
  describe(this: Department) {
    console.log(`Department ${this.id}: ${this.name}`);
  }

  addEmployee(e: string) {
    this.employees.push(e);
  }

  get myState() {
    return this.state;
  }

  set myState(val: Status) {
    this.state = val;
  }

  static createEmployee(s: string) {
    return { name: s };
  }
}

class ITDepartment extends Department {
  static initials = "IT";

  constructor(id: string) {
    super(id, "IT");
  }
}

const accounting = new Department("A1", "Accounting");
accounting.describe();

const it = new ITDepartment("D1");
it.describe();

it.myState = Status.ACTIVE;
console.log(it.myState);

const employee = Department.createEmployee("Max");

// Abstract class
abstract class Person {
  abstract describe(): void;
}

// Singleton class
class Engineer extends Person {
  private static instance: Engineer;

  private constructor(protected name: string, protected age: number) {
    super();
  }

  static getInstance(): Engineer {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new Engineer("Cristian", 27);
    return this.instance;
  }

  describe() {
    console.log(
      `I'm ${this.name} and I'm and Engineer of ${this.age} years old`
    );
  }
}

const theEngineer = Engineer.getInstance();
theEngineer.describe();
