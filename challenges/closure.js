// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
// Nested function can access the variable internal because they both are inside the same function myFunction scope. Also, it is a closure because nestedFunction is using a variable that is outside its function by its lexical environment.

/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(param){
  let sum = 0;
  function counter(){
    for(let i = param; i > 0; i--){
      sum += i;
    }
  }
  counter();
  return sum;
}

console.log(summation(4));