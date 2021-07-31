/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6
    
    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

let selectAllPElements = document.querySelectorAll("p");
console.log(selectAllPElements);

let selectSiteHeader = document.querySelectorAll(".site-header");
console.log(selectSiteHeader);

let selectJumbotron = document.querySelectorAll("#jumbotron-text");
console.log(selectJumbotron);

let selectAllPsInPrimary = document.querySelectorAll(".primary-content p");
console.log(selectAllPsInPrimary);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

let selectAlertButton = document.querySelector("#alertBtn");
selectAlertButton.addEventListener("click", alertUser);

function alertUser() {
  alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

// Task 3
let myBgrButton = document.querySelector("#bgrChangeBtn");
myBgrButton.addEventListener("click", changeBgrColour);
function changeBgrColour() {
  document.querySelector("body").style.backgroundColor = "red";
}

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

function addNewParagraph() {
  let jumbotron = document.querySelector("#jumbotron-text");
  let addNewParagraph = document.createElement("p");
  addNewParagraph.innerText = "check this out below!";
  jumbotron.appendChild(addNewParagraph);
}

let addTextButton = document.querySelector("#addTextBtn");
addTextButton.addEventListener("click", addNewParagraph);

addNewParagraph();

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

function increaseTextSize() {
  document.querySelectorAll("a").forEach((a) => (a.style.fontSize = "2em"));
}

let addLargerlinksButton = document.querySelector("#largerLinksBtn");
addLargerlinksButton.addEventListener("click", increaseTextSize);
