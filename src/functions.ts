// Function as a type
function addOne(n: number = 1): number {
  return n + 1;
}

// let myFunction: Function; // Not useful
let myFunction: (x: number) => number;
myFunction = addOne;
myFunction(3);
// myFunction(); // Default params

// Callbacks
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const x = n1 + n2;
  cb(x);
}

addAndHandle(3, 4, (x) => {
  console.log(x);
});

// Arrow functions
const withReturn = (x: number, y: number) => x + y;
let oneParam: (val: string) => void;
oneParam = (param) => console.log(param);

// N params
const addAll = (...numbers: number[]): number => {
  return numbers.reduce((acc, num) => acc + num, 0);
};

addAll(1, 2, 3, 4, 5)