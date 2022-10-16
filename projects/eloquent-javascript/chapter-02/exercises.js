
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  for (var i = "#"; i.length <= num; i += "#"){
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

function drawChessboard() {
  //Create a variable that is an empty string
  var chessBoard = "";
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
