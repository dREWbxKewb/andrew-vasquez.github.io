// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    // return a function that test whether a value is greater than the base parameter
    return function(value){
        return value > base;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    // return a function with parameter value
    return function(value){
        // return test that asks whether value is less than base
        return value < base;
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    return function(string){ //'Alex'
        // Create a if condition that ask if string index 0 starts with startsWith character
        if (string[0].toLowerCase() === startsWith.toLowerCase()){
            // return true if the string 'starts with' the startsWith character
           return true ;
        } else {
            return false;
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    //Create a return function that test string
    return function(string){
        //Create an if condition that ask if string.length is strictly equal to endsWith
        if (string[string.length - 1].toLowerCase() === endsWith.toLowerCase()){
            //return true
            return true;
        } else {
            return false;
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //

    //Create a var that holds a new array using array literal
    var collection = [];
    //Create a for loop to string array
    for (var i = 0; i < strings.length; i++){
        //Use the push method to push the modify function with the strings array index
        collection.push(modify(strings[i]));
    }
    //return the new array
    return collection;

    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    //Create a var to capture the test function output
    var newTest;
    //Create a for loop to loop the strings array
    for (var i = 0; i < strings.length; i++){
        //Pass each element in the array to the test function
        newTest = test(strings[i]);
        //Create a condition to check if the output of newTest is false
        if (newTest === false){
            return newTest;
        }
    }
    //If return newTest does not post, return true
    return newTest;
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
