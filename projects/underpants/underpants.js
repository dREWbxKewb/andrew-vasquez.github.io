// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';


var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value){
    //Return value
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value){ //Function takes in a value
    //Create a conditional that check if the value is an array
    if (Array.isArray(value) === true){
        //Return string array
        return "array";
    } else if (Array.isArray(value) !== true && value === null){ //This conditional checks if value is not an array and value is strickly equal to null
        //Return string null
        return "null";
    }
    //Default to the typeof of the value
  return typeof value;
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function(array, number){ //Function that takes in an array and number
    //Create a conditional that checks if the array parameter isn't an array or if number is less than 0
    if (!Array.isArray(array) || number < 0){
        //return array literal as it's value
        return [];
    }
    //Create a new conditional that checks if number exist or if it is not a number
    if (isNaN(number)){
        //Return the first element in the array
        return array[0];
    }
    //Determine if the number is greater than the length of the array
    if(number > array.length){
        //Return the whole array
        return array;
    }
    //Return the array point with the slice method
    return array.slice(0, number);
}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(array, number){ //Function takes in array and number as parameters
    //Determine if array is not an array or if number is negative
    if (!Array.isArray(array) || number < 0){
        //Return array literal
        return [];
    }
    //Determine if number is a number
    if (isNaN(number)){
        //Return the last element in array
        return array[array.length - 1];
    }
    //Determine if number is greater than array length
    if (number > array.length){
        return array;
    }
    //Return the last elements of the array using the slice method and subtracting the number parameter
    return array.slice(-number);

}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(array, value){ //Function takes in array and value as parameters
    //Iterate through the array index
    for (var i = 0; i < array.length; i++){
        //Determine if the index of array is equal to value
        if (value === array[i]){
            //Return the array at index
            return i;
        }
    }
    //Return -1 by default
    return -1;
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function(array, value){ //Function takes in array and value
    //Return ternary operator that uses the includes method as the condition
    return array.includes(value) ? true: false;
    
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func){
    //Create an conditional that checks if collection is an array
    if (Array.isArray(collection)){
        //Iterate through the collection using a for loop
        for (var i = 0; i < collection.length; i++){
            //Call the input func on each element
            func(collection[i], i, collection);
        }
    } else { //If collection is an object
        //Iterate through the collection using a for in loop
        for (var key in collection){
            //Call the input func for each property
            func(collection[key], key, collection);
        }
    }
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array){
    //Create an array variable that puts non duplicates
    var newArray = [];
    //Iterate through the array
    for (var i = 0; i < array.length; i++){
        //Create a conditional that checks if the indexOf function value is equal to the index
        if (_.indexOf(array, array[i]) === i){
            //Push the array index into the newArray array
            newArray.push(array[i]);
        }
    }
    //Return the newArray variable
    return newArray;
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, func){ //Function that takes in array and func
    //Create an array
    var newArray = [];
    //Iterate through array
    for (let i = 0; i < array.length; i++){
        //Determine if the function is true
        if (func(array[i], i, array) === true){
            //Push array index into new array
            newArray.push(array[i]);
        }
    }
    //Return variable
    return newArray;
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, func){ //Function that takes in array and function
    //Create an array
    var newArray = [];
    //Iterate through array
    for (let i = 0; i < array.length; i++){
        //Determine if the function is true
        if (func(array[i], i, array) === false){
            //Push array index into new array
            newArray.push(array[i]);
        }
    }
    //Return variable
    return newArray;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, func){ //Function that takes in array and function
    //Create 3 variables for array true and false
    var newArray = [];
    var trueA = [];
    var falseA = [];
    //Iterate through array
    for (var i = 0; i < array.length; i++){
        //Determine if function is true
        if (func(array[i], i , array) === true){
            //Push array index into true bin
            trueA.push(array[i]);
        } else { //If false
            //Push array index into false bin
            falseA.push(array[i]);
        }
    }
    newArray.push(trueA);
    newArray.push(falseA);
    return newArray;
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, func){ //Function that takes in collection and function
    //Create an array
    var mapArray = [];
    //Determine if an array is an array
    if (Array.isArray(collection)){
        //Iterate collection
        for (var i = 0; i < collection.length; i++){
            //Push the function into the mapArray
            mapArray.push(func(collection[i], i, collection));
        }
    } else { //If not an array
        //Iterate object
        for (var key in collection){
            //Push function into array
            mapArray.push(func(collection[key], key, collection));
        }
    }
    //Return the mapArray
    return mapArray;
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, property){
    //Return the map function that calls the object and returns the object property
    return array.map(function(obj){return obj[property]});
}

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, func){ //Function that takes in collection and function
    //Determine if a func is not provided
    if (func === undefined){
        //Determine if collection is an array
        if (Array.isArray(collection)){
            //Iterate through array
            for (let i = 0; i < collection.length; i++){
                //Determine if collection at index is a falsey dataype
                if(!collection[i]){
                    //Return false
                    return false;
                } 
            }
        } else { //Else if the collection is a function
            //Iterate through the object
            for (let key in collection){
                //Determine if collection key is a falsy datatype
                if (!collection[key]){
                    //Return false
                    return false;
                }
            }
        }
    } else { //Else func was provided
        //Determine if collection is an array
        if (Array.isArray(collection)){
            //Iterate through the collection
            for (let i = 0; i < collection.length; i++){
                //Determine if the function is equal to false
                if (func(collection[i], i, collection) === false){
                    //Return false
                    return false;
                }
            }
        } else { //If not an array
            //Iterate for an object
            for (let key in collection){
                //Determine if the function is false
                if (func(collection[key], key, collection) === false){
                    //Return false;
                    return false;
                }
            }
        }
    }
    //Return true by default
    return true;
}

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, func){
        //Determine if a func is not provided
        if (func === undefined){
            //Determine if collection is an array
            if (Array.isArray(collection)){
                //Iterate through array
                for (let i = 0; i < collection.length; i++){
                    //Determine if collection at index is a falsey dataype
                    if(!collection[i]){
                        //Return false
                        return false;
                    } 
                }
            } else { //Else if the collection is a function
                //Iterate through the object
                for (let key in collection){
                    //Determine if collection key is a falsy datatype
                    if (!collection[key]){
                        //Return false
                        return false;
                    }
                }
            }
            //Return true
            return true;
        } else { //Else func was provided
            //Determine if collection is an array
            if (Array.isArray(collection)){
                //Iterate through the collection
                for (let i = 0; i < collection.length; i++){
                    //Determine if the function is equal to true
                    if (func(collection[i], i, collection) === true){
                        //Return true
                        return true;
                    }
                }
            } else { //If not an array
                //Iterate for an object
                for (let key in collection){
                    //Determine if the function is true
                    if (func(collection[key], key, collection) === true){
                        //Return true;
                        return true;
                    }
                }
            }
        }
        //Return true by default
        return false;
}

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, func, seed){ //Function that takes in array, function and seed
    //Create a result variable
    let result;
    //Determine if a seed doesn't have value
    if (seed === undefined){
        //Assign result with the first item in array
        result = array[0];
        //Iterate through array starting at 1 index
        for (let i = 1; i < array.length; i++){
            //Reassign result to the result of invoking the function
            result = func(result, array[i], i, array);
        }

    } else { //If seed has value
        //Assign result to value
        result = seed;
        //Iterate through array
        for (let i = 0; i < array.length; i++){
            //Reassign result to the result of invoking the function
            result = func(result, array[i], i, array);
        }
    }
    //Return result
    return result;
}

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(object1, object2, ...object){//Function takes in an object, another object, and should be able to take in as many objects as possible
    //Assign object 1 to object2 and the rest param
    Object.assign(object1, object2, ...object);
    //Return the new object1
    return object1;
}
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
