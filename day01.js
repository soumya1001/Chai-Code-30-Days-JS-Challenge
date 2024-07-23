// Data types and variable
var a
a = 1
console.log(a);
let b
b = "soumya"
console.log(b);
const c = true
console.log(c);

// num st boo ob Array
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

//task 4
let x
x = 1
console.log(x);
x=2
console.log(x)
//task 5
const y = 9
console.log(y);
// y = 1  // TypeError: Assignment to constant variable.

//=> Variable Reassignment: let and var allow reassignment, const does not.
//=> Immutability: Primitive types are immutable, objects and arrays are mutable by default but can be made immutable using techniques like Object.freeze() or libraries like Immutable.js.