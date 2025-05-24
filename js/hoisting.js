//Example with var 
console.log(name); // Output: undefined (declaration is hoisted, but not the assignment)
var name = "Alice";
console.log(name); // Output: Alice

//Example with let & const 
console.log(age); // ReferenceError: Cannot access 'age' before initialization
let age = 25;

//Variables declared with let and const are hoisted but cannot be accessed before their declaration due to the temporal dead zone.
