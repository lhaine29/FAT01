// Document Object Model
//first step: target the element
let elementWithID = document.getElementById("first-div");
console.log("Element with ID:", elementWithID);
elementWithID.textContent = "Div 1";

let elementsWithClass = document.getElementsByClassName("sample-div");
console.log("Element with Class:", elementsWithClass);
elementsWithClass[1].textContent = "Div 2";

let listItems = document.getElementsByTagName("li");
console.log("Element with Tag:", listItems);
listItems[3].style.backgroundColor = "Yellow";
listItems[3].style.color = "green";
listItems[3].style.display = "inline"; //inline the list without number

// Accept: #id, .class-name, tag
// Return: first element
let unorderedListItem = document.querySelector(".unordered-list");
console.log("Query Selector:", unorderedListItem);
unorderedListItem.style.backgroundColor = "aqua";
unorderedListItem.style.color = "tomato";

// Accept: #id, .class-name, tag
let headings = document.querySelectorAll("h3"); //select all the h3
console.log("Query Selector All:", headings);
headings.forEach(function (heading) {
    heading.style.backgroundColor = "purple";
    heading.style.color = "White";
});

let dayNIghtIcon = document.getElementById("day-night-icon"); //update the icon attribute
dayNIghtIcon.setAttribute(
    "src",
    "https://cdn-icons-png.flaticon.com/512/3688/3688129.png"
);

//Appending -adding new element
//.querySelectorAll target all
//.querySelector first element
let parentElement = document.querySelector("#parent-element");
let createdElement = document.createElement("div");
createdElement.textContent = "Child Element";
parentElement.appendChild(createdElement);

// remove the element
let elementToBeRemoved = document.getElementById("element-to-be-removed");
elementToBeRemoved.remove();

//.addEventListener - click function event
let darkModeBtn = document.querySelector("#dark-mode-btn");
darkModeBtn.addEventListener("click", function () {
    let pageContainer = document.getElementById("page-container");
    pageContainer.style.backgroundColor = "Black";
    pageContainer.style.color = "white";
    let pageModeText = document.getElementById("page-mode-text");
    pageModeText.textContent = "Dark Mode";

    if(lightMdde){
        let pageContainer = document.getElementById("page-container");
        pageContainer.style.backgroundColor = "Black";
        pageContainer.style.color = "white";
        let pageModeText = document.getElementById("page-mode-text");
    }
});
