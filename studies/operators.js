/**
 * OPERATORS
 * 
 * 0: Operators in JS can be used to manipulate simple datatypes, compare datatypes and assign things to datatypes
 * 
 * 1: Assignment Operators
 * 
 * 2: Arithmetic Operators
 * 
 * 3: Comparison Operators
 * 
 * 4: Logical Operators
 * 
 * 5: Unary Operators (!, typeOf, -)
 * 
 * 6: Ternary Operator(a ? b : c)
 */

// 1 // Assignment Operators
//Assignment Operators assign values to variables in different ways
x = y; // x = y
x += y; // x = x + y
x -= y; // x = x - y
x *= y; // x = x * y
x /= y; // x = x / y
x %= y; // x = x % y
x **= y // x = x ** y
//In each of these examples, x was manipulated in some way by the y element
//This implimentation can be use with both numbers and string values, as they are assigning the variable to be a manipulation of the variable by whatever y will be in this case

// 2 // Arithmetic Operators
//In the case up above most assignment operators us arithmetic operators to execute their commands
(+) // Addition; x plus y
(-) // Subtraction; x minus y
(*) // Multiplication; x times y
(**) // Exponentiation; x to the power of y
(/) // Division; x divided by y
(%) // Modulus/Remainder; x with remainder of y
(++) // Increment; Similar to x plus y, but is actually x + 1
(--) // Decrement; Similar to x minus y, but is actually x - 1
//These operators alone only work on numbers, both literal and variable

// 3 // Comparison Operators
//In JS, booleans are the result of using a comparison operator on something or things
//In the case of demonstrating here is a variable
x = 5; //Base
(==) //Equal to; in this case x == 8 would be false, where x == 5 would be true. !!!This comparison is not strict and can compare things if they are 100% the same; x == "5" would be true!!!
(===) // Equal value and type; In most cases referred as strictly equals, is as it sounds. The datatypes must match 100%; x === 8 false, x === "5" false, x === 5 true
(!=) //Not Equal; Straightforward and to the point; x != 8 true, x != 5 false, x != "5" false
(!==) //Not Equal value and type; More strict in this case (strictly not equals); x !== 8 true, x !== 5 false, x !== "5" true
(>) //Greater Than; Compares if 1 value is bigger than another; x > 8 false, x > 1 true
(<) //Less Than; Compares if 1 value is smaller than another; x < 8 true, x < 1 false
(>=) //Greater Than or Equal; Compares if value is bigger or the same; x >= 8 false, x >= 1 true, x >= 5 true
(<=) //Less Than or Equal; Compares if value is smaller or the same; x <= 8 true, x <= 1 false, x <= 5 true
//Most of the time the use of this type of operator is to return a truthy or falsey statement, and in the case of a conditional will execute code if the condition is met
if(x < 8){return true}; //If, else if, and else conditions function off this logic

// 4 // Logical Operators
//Sometimes in JS you want to compare multiple types of cases, to which will require more logic to execute
//Logical Operators allow for you to do just that
y = 3; //We need a second base for these examples
(&&); //Logical And; This operator will allow you to chain mulitple comparisons into 1 conditional; if (x < 8 && y > 2) true; !!!All comparisons must resolve to true or false in order to get a true or false answer for these condtionals!!!
(||); //Logical Or; This operator will allow you to read down a line if one comparison in the chain isn't true; if (x > 8 || y > 2) true; Even though x is not greater than 8 we still print true because y is greater than 2
(!); //Not (BANG!); This operator will come up later in this section, but the gist is kinda like a not equal to comparison thats singular in its use; !(x == y) true
//These in case, are used for being very specific when comparing things

// 5 // Urary Operators
//Urary Operators are singular use operators, meaning that they are passed on to a single variable or datatype
//Looking above at examples for all the Operators, we can see that there are a few that exist in other operations
[!, ++, --] //These are good examples of single comparisons
(+, -); //Plus/Minus; These change things into numbers, with the minus operator turning it negative
(typeof, delete, void) //Typeof, Delete, Void; These operators manipulate datatypes to produce a result. Typeof takes one and returns the datatype in a string, Delete removes a index in an array or a property in a object, and void removes a value from an expression

// 6 // Ternary Operator
//This operator is a 1 line conditional that produces a result depending on truthy or falsey
const example = x === y ? true : false // This is example ternary operator
//                  1       2       3
/**
 * 1: This is the conditonal statement you are passing in, it will return true or false in any case, but won't log a result unless given one
 * 2: This is the result if true, will return anything you set as the truth logic
 * 3: This is the result if false, will return anything you set as the false logic
 */
//Ternary is a 3 step conditional that always need 3 different parameters to work
//Urary is a 1 step conditional that only needs 1 parameter to work
//Most conditionals outside of that are 2 parameter set.