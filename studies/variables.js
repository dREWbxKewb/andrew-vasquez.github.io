/**
 * VARIABLES:
 * 
 * 0: Variables are named containers for data in Javascript. To declare a variable..
 * 
 * 1: Declaration:
 * 
 * 2: Var, let, const:
 * 
 * 3: Hoisting:
 * 
 */

// 1 // Declaration
var age; // var is declaring age as a container for any data type
age = 35; // age has been assigned one of the value types, in this example a Number has been assigned
age = "twenty five"; // here we can reassign age to a different value type, as seen here age was a Number but now a String
console.log(age); // using the log we can see the value of age printed to the console
age = null; // even after we print the variable to the console we can still change the value of it, we now have it set to Null

// 2 // Var, Let, Const
// Scoping is the layers of js and can determine accessiblity of variables
// The top layer of the scope can be accessed by lower scopes, while lowe scopes can access variable in higher scopes
// With this in mind variables can be accessed in any scope, HOWEVER sometimes this can affect code if reassigned or changed lower in the scope
// To prevent this, new verbage was created to lock variables to certain scope access, let and const
var example = value; // var is global scoped and function scoped, meaning it can be accessed on a global scale and a function scale
var example;         // var is mutable, meaning it can be redeclared inside a function and reassigned to give a different value.
example = val2;      // Because this is true, this can affect code later on and cause problems

let example = value; // let is blocked scoped, meaning that it can't be accessed by outer scopes
let example = value2; //XXX  // While let can't be redeclared, it can be reassigned values
example = value2;    // This example shows that let is being re-assigned to value2 and this is true

const example = value; // const is blocked scoped, just like let can only be accessed by inner scopes
//const example; //XXX  // const cannot, in any circumstance, be redeclared or reassigned. Furthermore initializing MUST happen all at once
example = value; //XXX  // This means that const must be assigned something upon creation

//Here's an example of some scoping looks

var hello = "hello" // => this variable is accessable and mutable through this example
function pHW(){
    let world = "world" // => we can only use and change this variable inside the function and lower
    function addEx(){
        const exclamation = " !" // => can only be used in this function and can't be changed
        return hello + ' ' + world + exclamation // => this is a correct way to use all the variable as it follows the rules set
    }
    return hello + ' ' + world + exclamation // => will not return anything as we cannot access the const variable
}
console.log(hello + ' ' + world + exclamation) // => will not print anything as both the let and const values won't be accessable

//While technically the example does nothing, it shows how scoping and the variables interact with each other in scoping

// 3 // Hoisting
// Hoisting is a backend function that JS does to read and execute
// It takes variables and functions and pulls them to the top of the code for reability sake
example: var message = 'hello' // this is a standart initialization

         var message; //This is the declaration
         message = hello; // This is the intitialization if hoisting took the var

//The example above is how hoisting affects variables, but not all variable types can be hoisted

//In the case of let and const, they will be hoisted, but if not initialized, it will cause error in the code

example: var message = 'hello';
         let message2 = 'world';
         const message3 = "!";
//The example above shows what we see when we write the code and will execute if logged to the console

         var message; //Declaration that can find it initialization
         let message2; //Declaration that needs an initialization so will get an ref error if it doesn't exist after being declared
         const message3; //Declaration that needs an initialization and will give a syntax error if not initialized first before hoisting
         message = 'hello';
         message2 = 'world';
         message3 = '!';
//The example above shows how hoisting will affect this block of code, the variable type var will hoist to the top

        message2 = "world";
        let message2;
        message3 = "!";
        const message3;
//This example will give 2 results: a ref error for let cause it was not declared before initializing, and a sytax error for const cause it wasnt initialized when being declared
        