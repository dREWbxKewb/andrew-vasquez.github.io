// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    //Create a for loop that equals 0-100
    for (var i = 1; i < 101; i++){
      //create if/else if statement that takes into account a multiple of 15
      if (i % 15 == 0){
        //Log message
        console.log("FizzBuzz");
    } else if (i % 3 == 0){ //else if multiple by 3
        //Log message
        console.log("Fizz");
    } else if (i % 5 == 0){ //else if multiple of 5
        //Log message
        console.log("Buzz");
    } else {//Else Log i
        console.log(i);
    }
    } 



    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}