// #Section 1
/*Qns 1:
What does the acronym DRY stand for? Why should we pay attention to it? What programming tools have we learned to write DRY code?
*/

/*Ans to Qns 1:
Dry stand for don't repeat yourself. 
It's for clarity, performance as well as writing less code. If we have to write the same code/task 
1000 times with slight variation to the some part of the code, it is insane to write the same thing line
by line 1000 * block code of the task. Instead it is better to create 1 code block in a function with
parameters to change certain part of the code block to meet the requirement. This way we cut down lines of
code as well as more clear when searching and debugging code.
*/

/*Qns 2:
What is the difference between const and let and var? Please limit your answer to no more than three short sentences. Don't be afraid to research using google and other resources
*/

/*Ans to Qns 2:
const variable once assigned a value, it cannot be change throughout the code execution
let variable allow assigned value to be change and usually is bound by scope.
var variable is the same as let but is not bound by scope. It is like a global variable that can be 
change anywhere withing code execution.
*/

// ------------------------------------------------------------------------------------------
// #Section 2

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kelvin";
const f = false;

console.log(a != b);
console.log(c > b);
console.log("Name" === "Name");
console.log(a + b === c);
console.log(a * a === d);
console.log(e !== "Kevin");
console.log(48 == "48");
console.log(f !== e);

g = 0;
console.log(g);
g = b + c;
console.log(g);

//ans to writen Qsn
/*
1.Did you use const, let or var? Why did you choose the one you chose?

I use let. If the intention is for variable g to change  with b + c then let should be the correct one.
if use const will get "Assignment to constant variable" as once assigned a value, it can't be change.
var is the same as let but will avoid using it unless otherwise needed.

2. What happens if you don't use const , let or var? Do you get an error? If so what does it say?
nothing happens and the code execution get through. However it is not advisable as the "g" variable likely
to be assign under global scope which is a no go as something will goes wrong somewhere when written huge code base and scope plays an impt role.

3. what happens if you write 10 = g?
we run into a syntax error as there are rule to naming variable. Variable names must begin with a letter, an underscore (_) or a dollar sign ($). since 10 is begin as a number so it gives an error.
*/
console.log("-------------Section 2: bonus section-------");
console.log(a < (b || f) === !f && e !== c);

/*
bonus challenge
*/

// ------------------------------------------------------------------------------------------
// #Section 3
/*
#Infinite loop?
Q1. Is the code below an infinite loop? Why or why not?
  while (true) {
    console.log('Do not run this loop');
  }

Ans:
Yes it encounter an infinite loop as true is a boolean equate to true and while true it will keep
running console.log('Do not run this loop') and output 'Do not run this loop' in the console and hang the 
system as not termination of the while loop occurs.

#Infinite loop II
Q1. is this loop an infinite loop? Why or why not?
  const runProgram = true;

  while (runProgram) {
    console.log('Do not run this loop');
    runProgram = false;
  }

Ans:
Yes this encounter an infinite loop as well becuase the runProgram is define as a constant and cannot be change within the while loop block so it remain as true throughout code execution. Same as above it will log
'Do not run this loop' infinitly and hang the system.
*/

/*
#Reading code
*/

//assigned "A" to letters variable
let letters = "A";
//assigned number zero to i variable
let i = 0;

// start the while loop with i = 0, the code within the while loop will run
// as long as i is less than 20. so total the code will run 20 times
while (i < 20) {
  // the letters initially already assigned with letter "A"
  // so this line will concatenate "A" to letters which result letters as "AA"
  // this line will keep appen "A" to the variable
  letters += "A";
  // i started with zero and this line increment it by 1 making i = 2. when hit this line of code
  //throughout the loop the i will keep on incremental by 1
  i++;
}

//console log out the variable letters after the loops run 20 times.
//so the result will be 21 As (20 times A + the initial value of A)
//result: AAAAAAAAAAAAAAAAAAAAA
console.log(letters);
// yes the result is what i expected.

// ------------------------------------------------------------------------------------------
// #Section 4

/*
Q1. A for loop performs the same operation as a while loop. But what are the key differences, if any? What are the similarities?

ans: the key difference is that the start point assignment variable have to be declare outside the while
loop block while in a for loop the assignment is within the first line of the for loop statement.
Same as the incremental statement, for while loop it is declare inside the while loop while it is in the
first line of a for loop statement.
The similarities is the looping, they are both running the code
within the block untill the terminating condition is met.

#For loop control panel
Qns: What are the three components of the control panel? Each component is separated by a semicolon ;.

ans: 
The first part of the control panel is the assignment of a starting point(initialize). let i = 0.

The second part of the control panel is the check, the terminating condition i < 100. the loop will run
when i is less than 100 and stop when i reach 100 (i greater than 99)

The third part of the control panel is the incremental expression i++. This increase/decrease the i variable so that the terminating condition can be met. 
*/

/*
#For loop II
*/

for (let i = 0; i < 1000; i++) {
  console.log(i);
}

/*
bonus challenge

console.log('Without you, today\'s emotions are the scurf of yesterday\'s');

Ans: The above statement use single quote inside the console log for string output.
However, if the output string is intended to have an apostrophes sign in part of the string,
that part will be interpret by js as a string ending and there will be error as the quote order is
mess up. to do output the string correctly the back slash is use to escape that character to tell
js intepreter that this is and intended apostrophes. To avoid using backslash, use double quote 
for string assignment.
*/

/*
#For loop in reverse
*/

for (let i = 999; i >= 0; i--) {
  console.log(i);
}

/*
#More counting
*/

let start = 1;
let end = 10;

for (let i = start; i <= end; i++) {
  console.log("The value of i is: " + i + " of " + end);
}

/*
#Bonus Challenge 
*/

for (let i = start; i <= end; i++) {
  console.log(`The value of i is: ${i} of ${end}`);
}

/*
Iteration
*/
const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

for (let i = 0; i < StarWars.length; i++) {
  console.log(StarWars[i]);
}

for (let i = 0; i < StarWars.length; i++) {
  console.log(`${StarWars[i]} is in index ${i}`);
}

/*
#Bonus Challenge 
*/
for (let i = 0; i < StarWars.length; i += 2) {
  console.log(StarWars[i]);
}
