console.log('working');

// What are Functions??
 // we can calculate the area of one rectangle with the following steps everything time!!

const width = 10;
const height = 6
const area = width * height;
console.log(area); //output will be 60

//now imagine being asked to calculate the area of three different rectangles
// so you would carry out the first method three times logically, however in programming language we can code to make a specific task run several times instead of writing it for each area of rectangle for example, we achieve this by writing a function.
// FUNCTION is a reusable block of code that groups together a sequence of statements to perform a specific task.

// what does a function declaratoin consist of??
// function keyword followed by the identifier which is the name of the funtion by which you represent the function itself, and  the function body which is inside curly brackets {}.This is the block statemets required to perform a specific task, enclosed in the function.

// we should be aware of the hoisting feature in javescript as it allows access to function declarations before they are defined.

//Task done on codeacademy for creating a function that prints a reminder to the console. Using a function declaration, create a function called getReminder()

function getReminder(){
  console.log('Water the plants')
} // worked

function greetInSpanish(){
  console.log('hola')
} // worked

function greetInSpanish(){
  console.log('Buenas Tardes')
} // worked

// calling a FUNCTION
 // as you can see from the above examples and practices that a function declaration binds a function to an identifier, however , a function declaration does not ask the code inside the function body to run, it just declares the existence of the function.

 // the code inside a function body runs, or is excecuted, only when the function is called!! To call a function in your code, you type the function name followed by parentheses.

 //eg greetWotld();
 // this function call executes the function body or all of the statement between the curly braces in the function declarations

 // task

 function sayThanks(){
  console.log('Thank you for your purchase! We appreciate your business.');
}

sayThanks(); // in order to execute the code you have to type the identifier to initiate that.
// if you want to let say for three different customers u just sayThanks three times it should work.

//Parameters and Arguments
// at this stage we can say that the functions have been executing a task without inputs, however some functions can take inputs and use the inputs to perform task. when you are declarying a function, we can specify its parameters.

// Parameters allow functions to accept input(s) and perform a task using the input(s). we use parameters as placeholders for information that will be passed to the function when it is called.
