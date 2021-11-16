"use strict";
//////////////////////////////////////////////////////////////////////////
//Section 1: Programming Fundamentals
//////////////////////////////////////////////////////////////////////////
/*
Write a ~1 sentence summary for each one
Which ones surprise you (if any)?
Which one is currently giving you the most struggle?
*/

// DRY
// - Avoid repetition: As soon as you start repeating yourself create a new abstraction

// KISS
// - Simplicity: Simple code takes less time to write, has fewer bugs, and is easier to modify.

// Avoid creating a YAGNI
// - Add functionality only when you need it

// Do the simplest thing that could possibly work
// - Ask “What is the simplest thing that could possibly work?”

// Don't make me think
//- Code should be easily read and understood with a minimum of effort required.

// Write code for the maintainer
//- Write maintainable code. Remember it might be you who need edit your code later. so don't make it hard for yourself and others.

// Single responsibility principle
// - A component of code (e.g. class or function) should perform a single well defined task

// Avoid premature optimisation
// - Premature optimization is the root of all evil". (Don’t even think about optimization unless your code is working, but slower than you want)

// Separation of concerns
// - Distinct sections. Each section addresses a separate concern (distinct and minimally overlapping modules of code)

//A function with a parameter l passing in
// prettier-ignore
const f = l => {
  //variable initialize
  let es = 0, p = 0, c = 1, n = 0
  //loop the below code while c <= l.
  while (c <= l) {
    //var n assign with c + p
    n = c + p;
    //destructuring - 
    //assign c = n, 
    //and p =c 
    [c, p] = [n, c]
    // evaluate the right hand side first
    // ternary operator if (c % 2) equal to zero then pass in c to the left hand side (which becomes es += c)
    // else if (c % 2) is not equal to zero then pass in 0 to the left hand side (which becomes es += c)
    es += (c % 2 === 0) ? c : 0
  }
  return es
}
console.log(f(55));
/*
Cleaner & readable code
const f2 = (limit) => {
  let evenSum = 0;
  let previous = 0;
  let current = 1;
  while (current <= limit) {
    let next = current + previous;
    previous = current;
    current = next;
    if (current % 2 === 0) {
      evenSum += current;
    }
  }
  return evenSum;
}
console.log(f2(55))
*/

/*
In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?
*/
// ans: use function name like sumEvenNums, since we use sumEvenNums then the variable name evenSum should change to just Sum since the function already
// specify what is the task. can change previous and current and next to prevNum, currentNum, nextNum

/*
If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?
*/
//ans: i will work on f2. Easy to debug for additional add on of features

/*
Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
*/

//ans: Yes the semicolon is necessary, if not it will result an error. for this example, i think we need the semicolon there to distinguish a line break.
//if the semicolon is not there it will take the next line of code ([c, p] = [n, c]) commingle with n = c + p
