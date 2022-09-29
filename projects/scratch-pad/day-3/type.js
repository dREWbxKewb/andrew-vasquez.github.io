// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //

    // Use Array.isArray() method in if statement
    if (Array.isArray(value)){
        //return true
        return true;
    } else { // Every other condition is false
        //return false
        return false;
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    
    // determine if typeof value is 'object' AND value is not an array AND value is not null
    // AND value is not an instance of the date object(google how to see if something is instance
    // of date object)
    // create an if/else chain condition to determine if the value is an Object, not an array, and not null
    if (typeof value === 'object' && value !== null && !Array.isArray(value) && Object.prototype.toString.call(value) !== '[object Date]'){
        //return true
        return true;
    } else { // Else return false
        return false;
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
    // Create an if condition that determines if the value is an Array or an Object, starting with Object
    // This also means ruling out null and date
    if (typeof value === 'object' && value !== null && Object.prototype.toString.call(value) !== '[object Date]'){
        //return true
        return true;
    } else if (Array.isArray(value)){ // Else if the value is an array
        //return true
        return true;
    } else { // Everything else resolves to false
        return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    // Create an if condition to determine a array string
    if (Array.isArray(value)){
        //Return array
        return 'array';
    } else if (value === null){ // Else if the type of value is null
        // Return null string
        return 'null';
    } else if (Object.prototype.toString.call(value) === '[object Date]'){ // Else if the type of value is date
        // Return date string
        return 'date';
    } else { // Else return the type of value
        // Return typeof value
        return typeof value;

    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
