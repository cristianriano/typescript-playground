// Types

// number
// string
// boolean

function add(n1: number, n2: number): number {
  return n1 + n2;
}

const n1 = 5;
let n2: number
n2 = 8
// console.log(add(n1, n2));

// Object & Arrays
// Tuples (fix length arrays) Only TS
let person: {
  name: string;
  age: number;
  hobbies: string[],
  role: [number, string]
}
// let things: []any;

person = {
  name: "Cris",
  age: 27,
  hobbies: ["Code", "Read"],
  role: [1, "root"]
};

console.log(person.name);

// Iterate arrays
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

// Enum (Only TS)
// enum Role { ADMIN, READ_ONLY, AUTHOR }; // By default is 0, 1, 2...
enum Role { ADMIN = "ADMIN", READ_ONLY = "READ_ONLY" }

let myRole: Role;
myRole = Role.ADMIN;

// Other types
let numOrString: number|string;
let onOrOff: "on" | "off";

// Custom
type Combinable = number | string