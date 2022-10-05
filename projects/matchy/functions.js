/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Create a function called search that takes in animals as parameter 1 and a string of the animal being searched
function search(animals, name){
    //Create a loop that looks through the index of the animals array
    for (var i = 0; i < animals.length; i++){
        //Create a conditional that uses the name parameter, and compares it to the animals[index].name key value
        if (animals[i].name === name){
            //Return animals index
            return animals[i];
        }
    }
    //Return null as default
     return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Create a function called replace that takes in animals, name, and replacements
function replace(animals, name, replacement){
    //Create a for loop that looks through the index of the animals array
    for (var i = 0; i < animals.length; i++){
        //Create a conditional that uses the nam parameter and compares it to the animals[index].name key value
        if (animals[i].name === name){
            //return the replacement object in its place
            return animals[i] = replacement;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Create a function called remove that takes in animals, and name
function remove(animals, name){
    //Create a for loop to look through the index of animals array
    for (var i = 0; i < animals.length; i++){
        //Create a conditional that compares animals[index].name with the name parameter
        if (animals[i].name === name){
            //Use the splice method to remove the animal from the animals array
            animals.splice(i, 1);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Create a function add that takes in animals, and animal
function add(animals, animal){
    //Create a loop that loops through animals array
    for (var i = 0; i < animals.length; i++){
        //Create a conditional that checks if the animal object property name is greater than 0 and if is not equal to any index in animals
        if(animal.name > 0 && animal.species > 0 && animals[i].name !== animal.name && animals[i].species !== animal.species){
            animals.push(animal);
        }
    }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
