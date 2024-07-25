// Day 1: Variables and Data Types

// Activity 1: Variable Declaration
// Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var a
a = 1
console.log(a);
// Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let b
b = "soumya"
console.log(b);
// Activity 2: Constant Declaration
// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const c = true
console.log(c);
// Activity 3: Data Types
// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
const num = 1
console.log(typeof(num));
const stringg = "This is a string."
console.log(typeof stringg);
const booleanVar = false
console.log(typeof booleanVar);
const objvar = {name:"soumyajit",age:23}
console.log(typeof objvar)
const arrVar = [1,2,3]
console.log(typeof arrVar);  // Object
// Activity 4: Reassigning Variables
// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let x
x = 1
console.log(x);
x=2
console.log(x)
// Activity 5: Understanding const
// Task 6: Try reassigning a variable declared with const and observe the error.
// Feature Request:
const y = 9
console.log(y);
// y = 1  // TypeError: Assignment to constant variable.

//=> Variable Reassignment: let and var allow reassignment, const does not.
//=> Immutability: Primitive types are immutable, objects and arrays are mutable by default but can be made immutable using techniques like Object.freeze() or libraries like Immutable.js.