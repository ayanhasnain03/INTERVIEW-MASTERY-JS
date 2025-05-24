function outer(){
  let count = 0; // count is a private variable in outer function
 function inner(){
  count ++; //inner function accesses and updates count
  console.log(count); //print the current of count
 }
 return inner; // return the inner function, forming a closure
}
const counter = outer();  // counter now holds the inner function with access to count

counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3
