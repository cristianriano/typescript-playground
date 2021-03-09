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

// Enum (Only TS)
// enum Role { ADMIN, READ_ONLY, AUTHOR }; // By default is 0, 1, 2...
enum Role { ADMIN = "ADMIN", READ_ONLY = "READ_ONLY" }

let myRole: Role;
myRole = Role.ADMIN;

// Other types
let numOrString: number|string;
let onOrOff: "on" | "off";

// Custom
type Combinable = number | string;
type Numeric = boolean | number;

type Numable = Combinable & Numeric // Intersection is only number

// Unknwon
let userInput: unknown;
let userName: string;

// Can asign anything
userInput = "Juan";

// If you check the type then can be re asigned
if (typeof userInput === "string") {
  userName = userInput;
}

// Never: never return (error, infinite loop)
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}
