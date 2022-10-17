
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) { //Add a parameter that is a number
  //Use a loop to count and add a hash symbol
  for (var i = "#"; i.length <= num; i += "#"){
    //Log the variable
    console.log(i);
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  //Create a count
  for (let i = 1; i <= 15; i++){
    //Determine if count is divisible by 3
    if (i % 3 === 0 && i % 5 === 0){
      //Log Fizz to the console
      console.log("fizzbuzz");
    } else if (i % 3 === 0){ //If count is divisible by 5
      //Log Buzz to the console
      console.log("fizz");
    } else if (i % 5 === 0){ //If count is divisible by both
      //Log FizzBuzz to the console
      console.log("buzz");
    } else { //If count is not divisible by either or both
      //Log the count to the console
      console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) { //Add a num parameter
  //Create a variable that is an empty string
  var chessBoard = "";
  //Count using a for loop and the num parameter
  for (var i = 0; i < num; i++){
    //Create another count with num parameter
    for (var e = 0; e < num; e++){
      //Create a conditional that checks if the i plus e with a remainder of 2 would equal zero
      if ((i + e) % 2 === 0){
        //If so we will log for evens and add a empty space
        chessBoard += " ";
      } else { //If the check does not equal 0
        //Add a hash mark in the even numbers
        chessBoard += "#";
      }
    }
    //End the line using the new line syntax
    chessBoard += "\n";
  }
  //Log to the console the chessBoard
  console.log(chessBoard);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
