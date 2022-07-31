// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function() {
//     console.log("You clicked me!!!");
// })



// Identifies DOM elements
//var listItems = document.getElementsByClassName("list");
var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.getElementById("the-list");


// Adds an item to the list (when called by either listener)
function createListElement() {
    var div = document.createElement("div");
    var deleteButton = document.createElement("button");
    var li = document.createElement("li");
    // Puts txt & btn inside li
    div.classList.add("wrapper");
    ul.appendChild(div);
    div.appendChild(li);
    div.appendChild(deleteButton);
    li.classList.add("list");
    li.appendChild(document.createTextNode(input.value));
    input.value = "";    // Clears input
    deleteButton.classList.add("del");
    deleteButton.innerHTML = "Delete";
}


// Conditionally calls addItem function when button is clicked
function addListAfterClick() {
    if (input.value.length > 0) {
        createListElement();
    }
}

// Conditionally calls addItem function when ENTER is pressed
function addListAfterKeyPress(event) {
    if (input.value.length > 0 && event.code === "Enter") {
        createListElement();
    }
}

//Crossing off the items by enabling a class

// function doneTasks(el) {
//     if (el.target.className === ("list")) {
//         el.target.classList.toggle("done");                            
//     } else if (el.target.className === ("list done")) {                      //Another way of doing it.
//         el.target.classList.remove("done");
//     }
// }

function doneTasks(el) {
    if (el.target.classList.contains("list")) {
        el.target.classList.toggle("done");
    }
}



//Deleting items from the lists
function deleteTasks(el) {
    if (el.target.className === "del") {
        el.target.parentElement.remove();
    }
}

function handleUIClick(el) {
    doneTasks(el);
    deleteTasks(el);
}


//Callback function listening for event 
ul.addEventListener("click", handleUIClick);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keydown", addListAfterKeyPress);



















// Step 2: Selected element listens for an event to occur and then calls the required function(known as callback function).



//Exercise 

//Question 1

//Moved it up to make it work with new addes items to the list

//  var lili = document.querySelectorAll(".list");

//  lili.forEach(function (el) {
//     el.addEventListener("click", function () { el.classList.toggle("done") })
//  })




//Question 2




// deleteButton.forEach(function (db) {
//     db.addEventListener("click", function () {
//         console.log("I got clicked");
//     })
// })
