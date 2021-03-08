// Object & Arrays
// Tuples (fix length arrays) Only TS
let person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
};
// let things: []any;

person = {
  name: "Cris",
  age: 27,
  hobbies: ["Code", "Read"],
  role: [1, "root"],
};

console.log(person.name);

// Iterate arrays
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

// Spread
const numbers = [1, 2, 3];
const more = [4];

more.push(...numbers);

const otherPerson = { ...person, name: "Jhon" };
const { name: firstName, age } = otherPerson; // firstName = "Jhon" && age = 27

// Destructure
const [xx, yy, ...restNums] = numbers;
