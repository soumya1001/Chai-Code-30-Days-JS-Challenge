// Day 9: DOM Manipulation

// Activity 1: Selecting and Manipulating Elements
// Task 1: Select an HTML element by its ID and change its text content.
document.getElementById("heading").innerText = "Be Consistant"
// Task 2: Select an HTML element by its class and change its background color.
document.querySelector(".box").style.backgroundColor = "yellow"

// Activity 2: Creating and Appending Elements
// Task 3: Create a new div element with some text content and append it to the body.
let div = document.createElement("div")
let content = document.createTextNode("Hello DOM .I am here to manupulate you.")
div.append(content)
document.body.appendChild(div) 
// Task 4: Create a new li element and add it to an existing ul list.
let li1 = document.createElement("li")
let liText1 = document.createTextNode("Item1")
li1.appendChild(liText1)
let li2 = document.createElement("li")
let liText2 = document.createTextNode("Item2")
li2.appendChild(liText2)
let ul = document.getElementById("ul")
ul.appendChild(li1)
ul.appendChild(li2)

// Activity 3: Removing Elements
// Task 5: Select an HTML element and remove it from the DOM.
let remove =  document.getElementById("remove")
remove.remove()
// Task 6: Remove the last child of a specific HTML element.
let ulist = document.getElementById("ul")
ulist.removeChild(ulist.lastChild)

// Activity 4: Modifying Attributes and Classes
// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
document.getElementById("name").setAttribute("value","Soumyajit")
// Task 8: Add and remove a CSS class to/from an HTML element.
document.getElementById("heading").classList.remove("bg-red")
document.getElementById("heading").classList.add("bg-green")

// Activity 5: Event Handling
// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
let para = document.getElementById("para")
document.getElementById("parabtn").addEventListener("click",()=>{
    para.innerText="Hey! You changed me. Thank You."
})
// Task 10: Add a mouseover event listener to an element that changes its border color.
document.getElementById("hover").addEventListener("mouseover",()=>{
    console.log("hover");
    hover.style.border = "1px dotted red"
})
document.getElementById("hover").addEventListener("mouseout",()=>{
    console.log("hover");
    hover.style.border = ""
})