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