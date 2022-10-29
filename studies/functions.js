/**
 * FUNCTIONS
 * 
 * 0: A Function is a block of code, that performs actions based on what is passed into it
 * 
 * 1: Function Phasing
 * 
 * 2: Function Parameters vs Arguments
 * 
 * 3: Function Syntax
 * 
 * 4: Function Assigning
 * 
 * 5: Function Inputs and Outputs
 * 
 * 6: Function Scoping
 * 
 * 7: Function Closures
 */

// 1 // Function Phasing
// Functions are build like this: First a function must be created to do something
function doSomething(){
    return x;
}
//Second: After a function is made it must be invoked. Invoking a function will call the function to do what it is written
doSomething();
//When a function is called it will produce a result

// 2 // Function Parameters and Arguments
//Examples up above will do something, however when you build a function it has to accept data in order to do something
//Parameters in functions are those datatypes, but more specifically parameters are placeholders for datatypes that can be passed into the function
function doSomethingElse(x){ // In this case we declare x as a parameter that can be anything
    return x++
}
//Parameters aren't tethered by what data it must be, however knowing this usually you want to be specific on what you want that datatype to be
//In the example above, x will be representive of a number
doSomethingElse(0);
//Now that we made the parameter a hardcoded datatype in the function, it becomes an argument
//Arguments in js are the datatype pass in the function when it's called
// !!! NOTE: Parameters and Arguments are not the same, if you hardcode an argument into a function on creation that function will only take that particular datatype in
//           because this is a case, that function wouldn't be able to take in another argument to the function if called, hence why we make it as general as possible while
//           being specific with what general datatype we want to take in !!!

// 3 // Function Syntax
//Function Syntax is as follows
function newFunction(...parameter){};// 1: function keyword is an assignment call, it takes the following codeblock after it, and will make the variable name call the function if typed
                                     // 2: name of function is kinda like a variable, holding the codeblock that is what the function does !!! The name is usually close to what you want the function to do, and can contain symbols and digits like any variable
                                     // 3: in the parathesis of the function, are the parameters which are as many as you want for this function to take in, including other functions <= IMPORTANT later
                                     // 4: Curly Braces represent the scope of which the code will execute an store data, Meat and Bones

// 4 // Assigning Functions
//There are multiple ways of assigning functions: function <var>(){}, let <var> = function(){}, and even inside a function (function(){})
let newFunction = function(para){}; //This form of function creating is expressive, but will do the same thing the last example will do if called upon
let x = newFunction('HI'); //Functions can be assigned to variables as well, and will make that variable a function in itself, however later it will also help with closure as well

// 5 // Function Inputs and Outputs
//Functions can optionally take in inputs and return outputs
let none = function(para){
    return;             // In this case this function does nothing, however some key things to point out
                        // The function took in a parameter, however it told to return nothing
}
//Because return is in the function it will return something, but really in this case the function is just being told to stop
//Return is special, return tell code to stop doing things at whatever it returns, and in this case return is telling the computer to leave the function
//Functions don't need to return though, it is optional and will still produce something if told to, same deal with inputs
//Inputs are optional, but if put in will do something in the code if it needs to or be a reference for the code to use
none('Hello'); //In this case our none function will run and stop cause return will stop it regardless if it takes something or not

// 6 // Scoping
//In JS, scoping is the area in which variables and functions are written
            // Example of Scoping //

let number = 10; //This variable is printed in the global scope, and anything printed in the global scope will be accessable in scopes lower that it
// !!! I did use let as my variable, but as a reminder both let and const are blocked scoped meaning that scopes larger than the scope its in will not have access to it !!!

function add(num){ //Function Scoped: In this scope everthing in this scope is accessable in lower scopes, but higher scopes can't access the values in it
    let y = 10; //Accessed by the function, but won't print if logged outside of this function
    return number + 10;
}
console.log(add(90)) //Will print the return call
console.log(y) //Will print an error since you don't have access to that value

//This example is very small, but scoping is important to know when coding
//JS is just layers, and the lower layers have access the parent layer but not the opposite unless the variable is blocked scoped

// 7 // Closure
//Closure is a functions ability to hold onto variables after being reassigned to new variables
function doSomething(x){
    return function(y){
        return x + y;
    }
}
//Here we have a function that takes in a function and returns a function that returns something as well
//Closure will save the value of x if we assign it to a variable
let did = doSomething(10); //This variable is taking in the function call with 10 as an argument
let doMore = doSomething(9); //This variable is taking in the function call with 9 as an argument
//In this case, both these variables now have saved 10 and 9 respectively in there call
did(10); //Calling this new function is basically gonna return 10 + 10
doMore(9); //Calling this new function is basically gonna return 9 + 9
//Why is this the case though, and the answer is because once reassigned to another variable, these function do completely different things
//Both both preserve the x argument in the code because it is held inside the lower function call and has been copied at this point
//In more expanded terms, did is assigned the function call doSomething(x) which we know returns a function(y){return x + y}, but since we have an arg of 10, 10 is assigned to x and held onto
//And at this point did becomes a function since the last function returned a function, to which we assign y a number and get the return statement
//Similarly with doMore, its a function now that assigned x to be 9 and takes in 9 for y, which results in 18
