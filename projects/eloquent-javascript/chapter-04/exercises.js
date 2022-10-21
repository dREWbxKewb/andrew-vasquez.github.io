////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {//Function takes in a start and end number and a step number that determines how much we need to add to start to get closer
  //Create an array
  let arrayR = [];
  //Determine if end equals start or if end is less than 0
  if (end === start || step < 0){
    //Return arrayR;
    return arrayR;
  }
  //Determine if step is equal to 1
  if (step === 1){
    //Increment the start number by 1
    for (let i = start; i <= end; i++){
      //Push i into array
      arrayR.push(i);
    }
  } else if (step > 1){ //If step is greater than 1
    //Increment the start number by step
    for (let i = start; i <= end; i += step){
      //Push i into array
      arrayR.push(i);
    }
  } else { //If range doesnt have a step
    //Increment the start number by 1
    for (let i = start; i <= end; i++){
      //Push i into array
      arrayR.push(i);
    }
  }
  //Return array
  return arrayR;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array, output=0) {//Function that takes in a an array
  //Determine if the array is empty
  if (array.length === 0){
    return output;
  }
  //Increment output by the array at index
  output += array[0]
  //Return the function with the array sliced and output
  return sum(array.slice(1), output);
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {//Function takes in an array
  //Create an array
  let newArr = [];
  //Iterate through the array backwards
  for (let i = array.length - 1; i >= 0; i--){
    //Push the index value into the new array
    newArr.push(array[i]);
  }
  //Return the new array
  return newArr;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {//Function takes in an array
  //Iterate through the array and us Math.floor to end at half the array
  for (let i = 0; i < Math.floor(array.length / 2); i++){
    //Create a holder variable for the indexed array value
    let hold = array[i];
    //Make the first index of array equal to the last index of array minus i
    array[i] = array[array.length - 1 - i];
    //Make array at length minus i equal the held variable
    array[array.length - 1 - i] = hold;
  }
  //Return array
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {//Function takes in an array
  //Create a null variable
  let rest = null;
  //Iterate through array backwards
  for (let i = array.length - 1; i >= 0; i--){
    //Reassign rest to an object, with a value key with the value of the array index, and a rest key that is the value of the rest variable
    rest = { value: array[i], rest: rest };
  }
  //Return rest variable
  return rest;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, output=[]) {//Function takes in a object, and also has a default that is an array
  //base
  //Determine if the key value of rest in the object is null
  if (list.rest === null){
    //Push the final value property into output
    output.push(list.value)
    //Return the output default
    return output;
  }
  //recursion
    //Add current value property to output
  output.push(list.value);
  //Return the function with the rest property as its parameter and the output default
  return listToArray(list.rest, output)
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {//Function takes in a value and list
  //Return the value added to the list, and the next list in the line
  return {value, rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) {//Function takes in a list and number
  //Base
  //Determine if n is equal to 0
  if (n === 0){
    //Return the key value of list
    return list.value;
  }
  //Recursion
  //Determine if list exist
  if (!list){
    //Return undefined
    return undefined;
  }
  //Return the function with list with its rest key value and the number subtracted by 1
  return nth(list.rest, n - 1);
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
  //Determine if x and y are both not object
  if (typeof x !== "object" && typeof y !== "object"){
    return x === y;
  }
  //Determine if EITHER x or y is not an object
  if (typeof x !== "object" || typeof y !== "object"){
    return false;
  }
  //Create array of each object's keys
  let xKeys = Object.keys(x);
  let yKeys = Object.keys(y);
  //Determine if xKeys and yKeys don't have the same length
  if (xKeys.length !== yKeys.length){
    return false;
  }
  //Iterate through xKeys to see if properties match each other at the index
  for (let i = 0; i < xKeys.length; i++){
    if (!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[xKeys[i]])){
      return false;
    }
  }
  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
