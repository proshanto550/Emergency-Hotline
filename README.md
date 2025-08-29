JavaScript DOM & Events – Q&A
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById("id") → Returns one element that matches the given id. If no element exists, it returns null.

getElementsByClassName("className") → Returns a live HTMLCollection of all elements with the given class. It’s "live" because if new elements with that class are added, they automatically appear in the collection.

querySelector("selector") → Returns the first element that matches a CSS selector (like #id, .class, div > p).

querySelectorAll("selector") → Returns a static NodeList of all matching elements. Unlike getElementsByClassName, it does not update if the DOM changes.

2. How do you create and insert a new element into the DOM?

To create and insert an element:

Use document.createElement("tagName") to create the element.

Add text or attributes (like textContent, id, className).

Insert it into the DOM using methods such as appendChild, prepend, or insertBefore.

Example:

const newDiv = document.createElement("div");
newDiv.textContent = "Hello, World!";
document.body.appendChild(newDiv);

3. What is Event Bubbling and how does it work?

Event bubbling is when an event starts at the target element (the one that was clicked or interacted with) and then moves upward through its parent elements until it reaches the root (document).

For example: clicking a button inside a <div> will first trigger the button’s event handler, then the <div>’s handler, then the body, and so on—unless stopped.

4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation is a technique where instead of adding event listeners to every child element, you attach one event listener to a parent element and let event bubbling handle the rest.

Inside the handler, you check which child triggered the event using event.target.

Why useful?

Saves memory and improves performance (fewer listeners).

Works well with dynamically created elements (no need to reattach listeners).

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() → Stops the browser’s default action (e.g., prevents a form from submitting, prevents a link from opening).

stopPropagation() → Stops the event from bubbling up (or moving down in capturing phase). It prevents parent elements’ event handlers from being triggered.
