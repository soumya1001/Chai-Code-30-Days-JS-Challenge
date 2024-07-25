// Day 7: Objects
// Activity 1: Object Creation and Access
// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
let myBook = {
    title:"My Way",
    author:"Soumyajit Bag",
    year:"2030"
}
console.log(myBook);
// Task 2: Access and log the title and author properties of the book object.
console.log(myBook.title,myBook.author);

// Activity 2: Object Methods
// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
myBook.bookDetails = function (){
    return  myBook.title+" by "+myBook.author;
}
let BookDetails = myBook.bookDetails()
console.log(BookDetails);
// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
myBook.updateYear = function(year){
    myBook.year = year
}
myBook.updateYear(2025)
console.log(myBook);

// Activity 3: Nested Objects
// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
let library = {
    name : "My Library",
    books : [{
        title:"My Way",
        author:"Soumyajit Bag",
        year:"2030"
    },{
        title:"How To",
        author:"Soumyajit Bag",
        year:"2027"
    }]
}
console.log(library);
// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log("Library Name : ",library.name);
library.books.forEach((e)=>console.log(e.title))

// Activity 4: The this Keyword
// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
myBook.bookTitleAndYear = function (){
    return  this.title+" "+this.year;
}
console.log(myBook.bookTitleAndYear())

// Activity 5: Object Iteration
// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
for( e in myBook){
    console.log(e ,":",myBook[e])
}
// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log(Object.keys(myBook), Object.values(myBook));