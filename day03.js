// Day 3: Control Structures
// Tasks/Activities:
// Activity 1: If-Else Statements
// • Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console. • Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
// Activity 2: Nested If-Else Statements
// • Task 3: Write a program to find the largest of three numbers using nested if-else statements.
// Activity 3: Switch Case
// • Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
// • Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
// Activity 4: Conditional (Ternary) Operator
// • Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
// Activity 5: Combining Conditions
// • Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
let num = 0
if(num > 0){
    console.log("+ve")
}else if(num < 0){
    console.log("-ve")
}else{
    console.log(0);
}

let age = 18
if(age >= 18){
    console.log("Eligible to vote.");
}else{
    console.log("Not eligible.");
}

// Activity 2 
let a = 2
let b = 5
let c = 3

if(a > b){
    if(a > c){
        console.log("A is largest.");
    }else{
        console.log("C is greater.");
    }
}else if(b > c){
    if (b > a) {
        console.log("B is greater.");
    } else {
        console.log("C is greater.");
    }
}else{
    console.log("C is greater.");
}

//Activity 3
let key = 6
switch (key) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid");
    break;
}

let score = 80
switch (true) {
  case score > 90 && score <= 100:
    console.log("A");
    break;
  case score > 70 && score <= 90:
    console.log("B");
    break;
  case score > 50 && score <= 70:
    console.log("C");
    break;
  case score >= 30 && score <= 50:
    console.log("D");
    break;
  case score < 30:
    console.log("F");
    break;
  default:
    console.log("Invalid.");
    break;
}

// Activity 4
let number = 1
let result = (number % 2 ==0) ? "Even" : "Odd"
console.log(result);

// Activity 5
let year = 700
if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
    console.log("Leap Year.");
}else{
    console.log("Not a Leap Year.");
}