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
// 10: Infinity and -Infinity 