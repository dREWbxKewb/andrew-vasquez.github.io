// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {//Function takes in an array of arrays
  //Return the reduce method that takes in a function that takes in an array and the current index in the array of arrays
  return array.reduce(function(arr, curr){
    //Return the seed array concated with the current array at the index of array
    return arr.concat(curr);
  }, []);

}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(start, test, update, body) { //Function takes in a start value, test function, update function, and a body function
  //Iterate the start value, passing in the test function as the stop condition, and updating the value with the update function
  for (let i = start; test(i); i = update(i)){
    //Invoke the body function on the new value
    body(i);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  //Iterate through the array
  for (let i = 0; i < array.length; i++){
    //Determine if test array[i] is not true
    if (!test(array[i])){
      //Return false
      return false;
    }
  }
  //Return true
  return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(string) { //Function takes in a string
  //Create two arrays to store rtl values and ltr values
  let ltr = [];
  let rtl = [];
  //Iterate through the string
  for (let i = 0; i < string.length; i++){
    let code = string.charCodeAt(i);
    let script = characterScript(code); //{ script } | null

    if(script !== null){
      script.direction === "ltr" ? ltr.push(script) : rtl.push(script);
    }
  }
  return ltr.length > rtl.length ? 'ltr' : 'rtl';
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
