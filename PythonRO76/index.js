// py -> print("something") -> to display a message within terminal
// js -> console.log("something") -> display a message within terminal / console (browser)
console.log("hello world!");

// js -> // comment
// python -> # comment
/* 
    multi-line
    comment
    in
    JavaScript
*/

// Data Types
// Primitive types: string, number, boolean, null, undefined, Symbol
// Reference types: Array, Object, Function, Set, Map

// py -> str (string) -> "my string" (single quotes, double quotes, backticks)
// js -> string -> "my string" (single quotes, double quotes, backticks)

// const, let, var - keywords used to declare a variable
const firstName = "John"; // string
const lastName = new String(22); // string -> "22"
let age = 30;
const isAdmin = true; // boolean
let user = null; // null
user = "John Doe";
let car; // undefined
console.log(car);

const users = ["John Doe", "Jane Doe", "Will Smith"]; // Array
// js -> element -> index and value
// python -> item -> index and value

console.log(users[users.length - 1]); // "Will Smith"
console.log(users[0]); // "John Doe"

users.push("Emma Watson"); // pushed at end of our array
users.pop(); // removes the last element from our array

const newUsers = users.map((user, userIndex) => {
  return {
    id: userIndex,
    fullName: user,
  };
});
console.log(newUsers); // [...]

const person = {
  fullName: "John Doe",
  age: 30,
  isMarried: true,
  hobbies: ["hiking", "table tennis", "gym"],
  social: {
    facebookUrl: "https://facebook.com/john.doe",
    instagramUrl: "....",
  },
}; // object

// Access properties using . (dot) notation
console.log(person.age); // 30

function greetUser(user = "John") {
  // python -> f"Hello, {user}"
  return `Hello, ${user}`;
}

const greet1 = greetUser(); // "Hello, John"
const greet2 = greetUser("Emma"); // "Hello, Emma"

// Conditionals Statements

// if, else if, else
if (person.age >= 18) {
  console.log("Adult");
} else if (person.age >= 13) {
  console.log("Teenager");
} else {
  console.log("Child");
}

// switch
switch (true) {
  case person.age >= 18:
    console.log("Adult");
  case person.age >= 13:
    console.log("Teenager");
  default:
    console.log("Invalid age");
}

// Loops

// basic for loop
for (let i = 0; i < 50; i++) {
  console.log("i = ", i);
}

// while
let n = 0;

while (n < 50) {
  console.log("n = ", n);
  n++;
}
