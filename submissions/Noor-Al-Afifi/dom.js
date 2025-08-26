console.log("------------------ Task 1 ------------------------");
// Starting from document.body, write code that logs (in order):
console.log(document.body);

// The tag name of the last element child of using only navigation properties (no query selectors).
console.log(document.body.lastElementChild); //script

// The number of element children in (not text nodes).
console.log(document.body.children);
console.log(document.body.children.length);

// The difference in length between childNodes and children of Explain why they differ.
// The Differance is:
console.log(
  document.body.childNodes.length - document.body.children.length
); //3

console.log(document.body.childNodes.length); //6
console.log(document.body.children.length); //3
/*
Explain  :
childNodes => Returns all child nodes, including element nodes, text nodes (like newlines and spaces), and comment nodes.
children => Returns only element nodes (ignores text nodes and comments).
thats mean childrenNodes length is greater than children becouse that include(comment , text node ,new line ,spaces ) 
*/

// Determine:
// What is the nodeType and nodeName of the first node in document.body.childNodes?
const firstElement = document.body.childNodes[0]; // firstNode
console.log(firstElement.nodeName); // #text
console.log(firstElement.nodeType); // 3 =>
/*  
Every node in the page has a nodeType  
 and:Text nodes always have nodeType === 3
*/

// Is the first paragraph a sibling of the second, or a descendant?
// yes it is a nextSiblig

const main = document.body.children[1]; 

const section = main.firstElementChild; 

const firstPar = section.firstElementChild; // first child 

console.log(firstPar.textContent);




// Can you find any unexpected text nodes in the DOM structure? Log them and explain their origin.
console.log(document.body.children);// without #text ..


//  Returns all child nodes, including element nodes, text nodes (like newlines and spaces), and comment nodes.

console.log("------------------ Task 2 ------------------------");


const cardDiv = document.createElement("div")
cardDiv.classList.add('card')

cardDiv.dataset.role ='admin'; 
// cardDiv.setAttribute("data-role", "admin"); // add a class

document.body.append(cardDiv)

const h2 = document.createElement("h2");
h2.textContent = "Access Panel";
cardDiv.insertAdjacentElement("beforeend", h2);

const p = document.createElement("p");
p.textContent = "Authenticated";
cardDiv.insertAdjacentElement("beforeend", p);

// Log the value of the data-role as a JS property, not via .getAttribute.
console.log(cardDiv.dataset.role) // TO get a value of attribute

// Change the paragraph text to "Welcome back, Admin" using a property, not a method.
p.textContent = "Welcome back, Admin";

// Add two classes to the div: "authenticated" and "highlight" using classList.
cardDiv.classList.add("authenticated");
cardDiv.classList.add("highlight");


// Use classList.contains() to verify that "card" still exists, and remove it while keeping the others.
console.log(cardDiv.classList.contains("card")); // true


if (cardDiv.classList.contains("card")) {
  cardDiv.classList.remove("card"); // remove a card class
  console.log("Remove succesfully ")
} else {
  console.log('The element does not have the class card');
}
  

