/**
 * DATATYPES
 * 
 * 0: Datatypes are the kinds of values that can be assigned to a variable
 * 
 * 1 - 10: Number, String, Boolean, Array, Object, Function, undefined, null, NaN, Infinity and -Infinity
 * 
 * 11: What is the difference between primitive/simple and complex data types?
 * 
 * 12: Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, and how are they different?
 * 
 */

// 1 - 10 // Datatypes Description

// 1: Numbers are number values
0, 1, 2, 3;
// 2: Strings are characters in quotes
"hello", 'world', 'a';
// 3: Booleans are true and false
true, false;
// 4: Arrays are a collections of data in a list form and can hold all data types
[0, 'hello', true, [], {}, undefined, null, NaN];
// 5: Objects are a collection of data that are more like characteristics and can hold all data types
{num: 0, string: 'hello', boolean: true, arr: [], obj: {}, isUndefined: undefined, isNull: null, isNaN: Nan};
// 6: Functions are blocks of code that performs a task and can be initialized on a variable. they can also be called in a function, stored in an array, and be a characteristic in an object
    // functions can use other datatypes to perform the task as parameters
function [insert callback Name here](...parameters){};
// 7: undefined is just as it sounds, undefined
var hi = undefined;
// 8: null is similar to undefined but references the number 0
var hi = null;
// 9: NaN is comparable to null but more so for numbers
var hi = NaN;
// 10: Infinity and -Infinity is a number that doesnt have a strict value
// Infinity is tricky as it can be used with numbers, but doesn't have an acual value
// Furthermore, infinity can also be negative and affects any number or even infinity just like a negative number
Infinity; -Infinity;

// 11 // Primitive/Simple and Complex Datatypes and // 12 // Copy and Reference
/**
 * Datatypes are not all equal, as they can be primitive and complex
 * Primitive/Simple datatypes are immutible (will get to this soon), and are copyable through different scopes depending on what variable structure you use
 * Complex datatypes are mutible, and are referenced through scopes
 * 
 * Primitive Datatypes: strings, numbers, booleans, null, undefined, NaN, and Infinity
 * Complex datatypes: objects, arrays
 */

//Typeof!!!
typeof <insert datatype here> //This is how you can find out what kind of datatype your value or variable is
//typeof is a code that looks at a variable and prints to the console a string of the datatype
//This keyword is used to understand what kind of datatype you have a any given moment

//However there are some drawbacks
/*
typeof does not understand the difference in complex datatypes and some primitives
EX: Simple Datatypes will print themselves to console as such, but objects, arrays, and null will always print as "object"
In this case, there are other methods to determining if they are their respective datatypes
*/

Array.isArray(objects, array, null);
// This method above shows us the process of determining if any of these 3 are an array
// The Array.isArray method will take a datatype and give it a true or false if it is an array or not
// This helps if you have multiple parameters in a function to sort out one that you want as arrays
// In this case anything else will revert to object, which makes us question what about null?
valueRepresentingNull == null;
// This up above example represents how you would try to check if null was null
// Unfortunately you would have to use comparison operators to get the type of null

// Lastly, what was the mutible and immutible thing I was talking about earlier?
// Well if you understand how variable can be reassigned, datatypes can be changed as well to some degree

//SIMPLE
var n = 0;
//Take this example, we have a number here which we no is simple
//In the case of this number, we want to change it. While we could just change the variable to be a different number, I have a different plan
n += 1;
// Simple datatypes are immutable, meaning that you can just say make this this now without changing the variable completely, however you can use different arithmetic operators to change these values
// This is also the case for strings with different string methods built into JS

//COMPLEX
var arr = [1, 2, 3, 4];
//This example shows us a complex datatype
//Complex datatypes are mutible, meaning anything you do to them will follow to the end of your code
//There are methods in JS that allow us to add, subtract, put in middle, sort, and change the data structure of complex datatypes

