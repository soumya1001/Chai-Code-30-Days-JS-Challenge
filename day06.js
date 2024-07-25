// Day 6: Arrays

// Activity 1: Array Creation and Access
// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
let numberArray = []
for(let i=1;i<=5;i++){
    numberArray.push(i);
} 
console.log(numberArray);
// Task 2: Access the first and last elements of the array and log them to the console.
console.log(numberArray[0],numberArray[numberArray.length-1]);

// Activity 2: Array Methods (Basic)
// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
numberArray.push(7);
console.log(numberArray);
// Task 4: Use the pop method to remove the last element from the array and log the updated array.
numberArray.pop();
console.log(numberArray);
// Task 5: Use the shift method to remove the first element from the array and log the updated array.
numberArray.shift()
console.log(numberArray);
// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
numberArray.unshift(4)
console.log(numberArray);

// Activity 3: Array Methods (Intermediate)
// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let newNumberArray = numberArray.map((e)=>{
    return e*2;
})
console.log(numberArray,newNumberArray);
// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
let filterEvenNumberArray = numberArray.filter((e)=> e%2 == 0);
console.log(numberArray,filterEvenNumberArray);
// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
let sumOfArrayElements = numberArray.reduce((a,b)=>a+b,0)
console.log(numberArray,sumOfArrayElements);

// Activity 4: Array Iteration
// Task 10: Use a for loop to iterate over the array and log each element to the console.
for(let j=0;j<numberArray.length;j++){
    console.log(numberArray[j]);
}
// Task 11: Use the forEach method to iterate over the array and log each element to the console.
numberArray.forEach((e)=> console.log(e))

// Activity 5: Multi-dimensional Arrays
// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);
// Task 13: Access and log a specific element from the two-dimensional array.
console.log(matrix[1][1]);  //row1 column1