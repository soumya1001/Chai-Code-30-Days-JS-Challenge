// Day 10: Event Handling
// Tasks/Activities:
// Activity 1: Basic Event Handling
// • Task 1: Add a click event listener to a button that changes the text content of a paragraph.
let text1 = document.getElementById("text1")
let text1btn = document.getElementById("text1btn")
text1btn.addEventListener("click",()=>{
    text1.innerText = "Hello Everybody,Let's chillll!"
})
// • Task 2: Add a double-click event listener to an image that toggles its visibility.
let img1 = document.getElementById("img1")
let img1toggle = document.getElementById("img1toggle")
img1toggle.addEventListener("click",()=>{
    console.log(img1);
    if(img1.src.match("bulbon")){
        img1.src = "./pic_bulboff.gif"
    }else{
        img1.src = "./pic_bulbon.gif"
    }
})

// Activity 2: Mouse Events
// • Task 3: Add a mouseover event listener to an element that changes its background color.
let bgchange = document.getElementById("bgchange")
bgchange.addEventListener("mouseover",()=>{
    bgchange.style.backgroundColor = "green"
})
// • Task 4: Add a mouseout event listener to an element that resets its background color.
bgchange.addEventListener("mouseout",()=>{
    bgchange.style.backgroundColor = ""
})
// Activity 3: Keyboard Events
// • Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
let input1 = document.getElementById("input1")
input1.addEventListener("keypress",(e)=>{
    console.log(e.key);
})
// • Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
let input2 = document.getElementById("input2")
input2.addEventListener("keyup",(e)=>{
    console.log(e.key);
})
// Activity 4: Form Events
// • Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
let frm1 = document.getElementById("frm1")
frm1.addEventListener("click",(e)=>{
    e.preventDefault()
    const formData = new FormData(frm1);
    const name = formData.get("name")
    console.log(name);
})
// • Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
// Activity 5: Event Delegation
// • Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
// • Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.