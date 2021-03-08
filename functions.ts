// Function as a type
function addOne(n: number): number {
  return n + 1;
}

// let myFunction: Function; // Not useful
let myFunction: (x: number) => number;
myFunction = addOne;
myFunction(3);

// Callbacks
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const x = n1 + n2;
  cb(x);
}

addAndHandle(3, 4, (x) => {
  console.log(x);
});
