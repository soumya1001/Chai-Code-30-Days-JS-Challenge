// Day 12: Error Handling
// Tasks/Activities:
// Activity 1: Basic Error Handling with Try-Catch
function sum (a,b){
    try {
        let c = a+b 
        return c
    } catch (error) {
       return false 
    }finally{
        console.log("Excuted");
    }

}
console.log(sum(12,32))
// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function throwErr(){
    throw new Error("Something went wrong!!!")
}
function handleErr(){
    try {
        throwErr()
    } catch (error) {
        console.log(error.message);
    }
}
handleErr()
// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
let division =(divident,divisor)=>{
    if(divisor == 0){
        throw new Error("Denominator can't be Zero.")
    }
    console.log(divident / divisor)
}
try {
    division(2,6)
} catch (error) {
    console.error(error.message)
}

// Activity 2: Finally Block
// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
function observeErr(){
    try {
        console.log("executed");
        throw new Error("Random Error")
    } catch (error) {
        console.log(error);
    } finally{
        console.log("completed");
    }
}
observeErr()
// Activity 3: Custom Error Objects
// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
// Activity 4: Error Handling in Promises

// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
// Activity 5: Graceful Error Handling in Fetch

// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
// Feature Request:
// Basic Error Handling Script: Write a script that demonstrates basic error handling using try-catch and finally blocks.
// Custom Error Script: Create a script that defines and throws custom errors, handling them with try-catch blocks.
// Promise Error Handling Script: Write a script that handles errors in promises using .catch() and try-catch within async functions.
// Fetch Error Handling Script: Create a script that handles errors when using the fetch API to request data from invalid URLs.