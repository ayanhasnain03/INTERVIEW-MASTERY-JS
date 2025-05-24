# JavaScript Interview Questions

## 1. What is JavaScript?
JavaScript is a high-level, interpreted language used to create interactive and dynamic web pages. It runs in browsers and servers, enabling rich user experiences through DOM manipulation, event handling, and asynchronous communication.

## 2. What is the DOM in the context of JavaScript?
The DOM (Document Object Model) is a way JavaScript sees and changes a webpage’s content and structure. It lets scripts update the page dynamically.

## 3. Explain the difference between let, var, and const in JavaScript?

- `var` is function-scoped and can be redeclared.  
- `let` is block-scoped and can be updated but not redeclared in the same scope.  
- `const` is block-scoped and cannot be reassigned after declaration.

## 4. What is the purpose of closures in JavaScript?

Closures in JavaScript allow a function to remember and access its outer (enclosing) scope even after that outer function has finished running. This helps in creating private variables and maintaining state.

For a detailed example of closures, see the [closures.js example](./closures.js).

## 5. What is the event loop in JavaScript?
The event loop is a mechanism that allows asynchronous JavaScript code to execute in a non-blocking way. It continuously checks the message queue and executes tasks in a loop.

## 6. What is the difference between == and === in JavaScript?
 == is equality operator that performs type coercion, while === is the strict equality operator that checks both value and type.

## 7. Explain the concept of hoisting in JavaScript?
Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their scope before code execution. This means you can use variables and functions before they are declared in the code (though with some differences between var, let, and const).
For a detailed example of closures, see the [hoisting.js example](./hoisting.js).
