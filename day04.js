// Day 4: Loops
// Tasks/Activities:
// Activity 1: For Loop
// • Task 1: Write a program to print numbers from 1 to 10 using a for loop.
// • Task 2: Write a program to print the multiplication table of 5 using a for loop.
// Activity 2: While Loop
// • Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
// • Task 4: Write a program to print numbers from 10 to 1 using a while loop.
// Activity 3: Do... While Loop
// • Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
// • Task 6: Write a program to calculate the factorial of a number using a do...while loop.
// Activity 4: Nested Loops
// • Task 7: Write a program to print a pattern using nested for loops:
// Activity 5: Loop Control Statements
// • Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
// • Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement
// FOR LOOP
for(let i = 1 ; i <= 10; i++){
    console.log(i);
}
for(let i = 1 ; i <= 10; i++){
    console.log(i+"*5 = "+i*5);
}
//while
let sum = 0
let j = 1
while (j<=10) {
    sum += j
    j++
}
console.log(sum);

j = 1
while (j<=10) {
    console.log(j);
    j++
}
//do while
j=1
do {
    console.log(j);
    j++ 
} while (j<=5)
// factorial of a number
j=1
let factNum = 5
let factResult = 1
do{
    factResult *= factNum 
    factNum--
}while(j<=factNum)
console.log(factResult);

//pattern 

// *
// **
// ***
// ****
// *****
let string = ""
for (let index = 1; index <= 5; index++) {
    for (let k = 1; k <= index; k++) {
        string += "*"
    }
    string+="\n"
}
console.log(string);
//control statement
console.log("control statement");
for(let i = 1 ; i <= 10; i++){
    if(i == 5) {
        continue;
    } 
    console.log(i);
}

for(let i = 1 ; i <= 10; i++){
    if(i == 7){
        break;
    }
    console.log(i);
}