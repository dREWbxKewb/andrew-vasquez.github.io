/**
 * LOOPS
 * 
 * 0: Loops are used for counting and looking at complex datatypes when you don't have access to the values
 * 
 * 1: All the Loop types
 * 
 * 2: Loop process to count up and down
 * 
 * 3: Looping an Array Forwards and Backwards
 * 
 * 4: Looping an Object
 */

// 1 // Types of Loops
//In JS there are 3 main types of loops that are used
for (start; conditional; update){} 
//For loop; This loop is a loop that counts up or down depending on your 3 different pass-ins. For loops can be used on arrays to look at the index values
//The start value will determine where the loop will start, the condition will act as the stop condition and determine if the start value is less or more than the value you set, and the update value will manipulate the start value and restart the loop
for (let key in obj){}
//For in loop; This loop will iterate through the keys of an object allowing you access to the properties and values
//The key is the value of all the keys in an object since objects aren't in list form, and the in obj part is the object you are performing the loop on
while (condition){}
//While loops handle small conditions, and in some cases can be used like a for loop
//While loops are better at counting though as they require less logic to function
//!!! IMPORTANT: While loops need a increase or decrease value or will run infinitely and crash your program!!!

// 2 // Loop process to count
//The following will be a demostration of the while loop counting up and down
let x = 0 //Example 1
let y = 10 //Example 2

while (x < 10){ //While is declared with a conditional
    console.log('not done'); //We are doing something at this point
    x++; //x is then incremented and the loop starts again
}
while (y > 0){ //Same as example 1, condition is set
    console.log('Too High'); //Something happens
    y--; //y decrements and the loop starts again
}
//As you can see, loop can do simple counting, but the main goal of a loop is to check complex datatypes

// 3 // Looping an Array
//In this example, we will be looping an array front to back
let array = [0, 1, 2, 3, 4, 5,]; //Base
let copy = []; //Ex 1
let reverse = []; //Ex 2

for (let i = 0; i < array.length; i++){ //Starting with the for loop, the start is set to zero, compared to the length of the array, and incremented if less than the length
    copy.push(array[i]); //We then push the value at i in the array into the copy
}
console.log(copy); //This will print the new array with the values in order

for (var i = array.length - 1; i >= 0; i--){ //Starting at the end of the array, compared to zero, and decremented if greater than or equal to zero
    reverse.push(array[i]); //Pushes the values into an array in reverse
}
console.log(reverse); //This will log an array of the values in reverse

// 4 // Looping an Object
//This example will show us how to loop through an object
// Base //
let person = {
    name: "Andrew",
    age: 35,
    occupation: "Line Cook",
    inSpark: true,
}

for (let key in person){ //This loop will assign key to the properties in person
    console.log(key); //This log will print all the keys to the console
    console.log(person[key]); //This log will print the key values to the console
}
//Looping an object is pretty simple, however won't produce the same results if you try to for loop an object, in fact u can only us a for in for an object, and a for loop for an array
//Even more complex is that you can chain multiple loop to get different result if the value u are looping for is a complex datatype