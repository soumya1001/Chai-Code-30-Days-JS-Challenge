// Activity 1: Template Literals
// • Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let name = "soumyajit"
let age = 21
console.log(`My name is ${name}. I am ${age} years old.`)
// • Task 2: Create a multi-line string using template literals and log it to the console.
console.log(`My name is ${name}.\nI am ${age} years old.`)
// Activity 2: Destructuring
// • Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
let numArray = [1,2,3]
const [a,,b] = numArray
console.log(a,b);
// or
const [x,...y] = numArray
let lastElem = y.pop()
console.log(x,lastElem);
// • Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
let myBook ={
    title : "The Truth",
    author : "Soumyajit Bag"
}
const {title,author} = myBook
console.log(`${title} By ${author}`);
// Activity 3: Spread and Rest Operators
// • Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
let arr1 = [0,1,2]
let arr = [...arr1,3,4,5]
console.log(arr);
// • Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...numbers){
    // console.log(numbers);
    return numbers.reduce((sum,num)=>sum+num,0)
}
console.log(sum(1,25,2,524,2))
// Activity 4: Default Parameters
// • Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function productOfTwoNum(a,b=2){
    return a *b
}
console.log(productOfTwoNum(2,4));
// Activity 5: Enhanced Object Literals
// • Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const productName = "Gadget";
const price = 99.99;
const product = {
    productName,
    price,
    displayInfo() {
        console.log(`Product: ${this.productName}, Price: $${this.price}`);
    }
};
console.log(product);
product.displayInfo();
// • Task 9: Create an object with computed property names based on variables and log the object to the console.
let myName = "fullName"
let value = "Soumya"
let objj = {
    [myName] : value,
    [`${myName}_2`] : "Papai"
}
console.log(objj);