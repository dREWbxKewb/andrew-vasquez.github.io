/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Create a var named animal assigned to an empty object
var animal = {};
//Use dot notation to add species with a value of any animals species
animal.species = "Dog";
//Use bracket notation to add name with the value of the animals name
animal['name'] = "Hannah";
//Use any notation to add noises with the value of an array
animal.noises = [];
//Log to the console the animal variable
console.log(animal);




//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Create a variable named noises and assign it to an array literal
var noises = [];
//Use bracket notation to add a noise value to the noises array
noises[0] = 'bark';
//Use the push method to add another noise to the end of the noises array
noises.push('whine');
//Use the unshift method to add another noise to the beginning of the noises array
noises.unshift('sniffle');
//Use bracket syntax to add a element to the end of the noises array
noises[noises.length] = 'growl';
console.log(noises);



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Create a noises key for the object animal using bracket notation. Make it equal the noises array
animal['noises'] = noises;
//Using any syntax, add another noise to the noise array in animal object
animal.noises.push('grunt');
console.log(animal.noises);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * Using dot notation and bracket notation, you can access the properties in an object
 * 2. What are the different ways of accessing elements on arrays?
 * You can only access the elements of an array using bracket notation
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Create a var animals that is an array literal
var animals = [];
//Push our animal object into our animals array
animals.push(animal);
//Create a var called duck that is assigned to an object
var duck = {
  //Fill the object with species, name jerome, noises index of duck noises
  species: 'Duck',
  name: 'Jerome',
  noises: ['quack', 'honk', 'sneeze', 'woosh']
}
//Push duck to animals array
animals.push(duck);
//Create another animal var that takes on an object
var cat = {
  //Add species, name and noise key to cat object
  species: 'Cat',
  name: 'Liger',
  noises: ['meow', 'purr']
}
//Create another animal var that takes on an object
var turtle = {
  //Add species, name and noise key to turtle object
  species: 'Turtle',
  name: 'Pirate',
  noises: ['splash', 'snap']
}
//Push new variables into the animals array
animals.push(cat);
animals.push(turtle);





//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//We are gonna use an array. An array stores various data types, including strings. The strings we want to store will be names from the animal object
//Create a var called friends and assign it to an array literal
var friends = [];
//Create a function called getRandom that takes the animals array as its parameter
function getRandom(animals){
  //Return a random animals index using math.random 
  return Math.floor(Math.random() * animals.length - 1);
}
//Create a date bin for the getRandom function
var randomI = getRandom(animals);
//Get a random index and add its name value to the friends array
friends.push(animals[randomI].name);
//Use bracket notation to add the friends key with values to the animals array
animals[randomI]['friends'] = friends;



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}