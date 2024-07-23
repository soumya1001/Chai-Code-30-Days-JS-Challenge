// Day 5: Functions
// Tasks/Activities:

// Activity 1: Function Declaration
// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function oddEven(num){
    if(num % 2 == 0){
        return true;
    }else{
        return false;
    }
}
let num = 3
console.log(oddEven(num) ? "Even" : "Odd")
// Task 2: Write a function to calculate the square of a number and return the result.
num = 6
function square(num){
    return Math.pow(num,2)
    // return num ** 2
    // return num * num
}
console.log(square(num));

// Activity 2: Function Expression
// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
let maxOfTwo = function (num1,num2){
    if(num1 > num2){
        return num1
    }else{
        return num2
    }
}
console.log(maxOfTwo(3,38));
// Task 4: Write a function expression to concatenate two strings and return the result.
let concateString = function(str1,str2){
    return str1+str2
}
console.log(concateString("Soumyajit","Bag"));

// Activity 3: Arrow Functions
// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
let sum = (a,b)=>{
    return a+b
}
console.log(sum(1,3));
// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
let checkChar = (string , char) => {
    if(string.includes(char)){
        return true
    }else{
        return false
    }
}
console.log(checkChar("Soumyajit","S"));

// Activity 4: Function Parameters and Default Values
// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function defaultParamValue(a,b=9){
    return a+b
}
console.log(defaultParamValue(2,6));
// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function greetingMesage(name,age=23){
    return "Hey "+name+"! Congrates. You are now "+age+"."
}
console.log(greetingMesage("Soumyajit"));

// Activity 5: Higher-Order Functions
// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
function logClick(){
    console.log("Click.");
}
function higherOrderFun(func,count,param){
    while(count > 0){
        func(param)
        count--;
    }
}
higherOrderFun(logClick,4);
// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function higherOrderFun2(func1,func2,value){
    let result1 = func1(value)
    let result2 = func2(result1)    
    return result2
}
let addTwo = (num)=>{
    return num + 1
}
let multiplyByTwo = (num) => {
    return num * 2
}
console.log(higherOrderFun2(addTwo,multiplyByTwo,20));
