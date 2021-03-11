// Casting
// ! means is not null
const myInput = document.getElementById("user-input")! as HTMLInputElement;
// const myInput = <HTMLInputElement> document.getElementById("user-input")!;
myInput.value = "Hi from TS";

// Index properties (unkown name, just type)
interface ErrorContainer {
  [prop: string]: string;
}
const myError: ErrorContainer = {
  name: "Must be valid",
};

// Optional chaining (like &. in Ruby)
// myObject?.values?.val

const firstInput = null;
const myValue = firstInput ?? "DEFAULT"; // Only for null and undefined. When empty or 0 is ok

// Generic
const names: Array<string> = [];

const promises: Promise<any> = new Promise((resolve, _reject) => {
  setTimeout(() => {
    resolve("Done!");
  }, 1000);
});
