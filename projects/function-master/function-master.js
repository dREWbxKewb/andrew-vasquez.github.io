//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    //Create a var for the key values
    var keyArray = [];
    //Create a for in loop that pulls the keys from the object
    for (var key in object){
        //Push key values into bin
        keyArray.push(object[key]);
    }
    //Return array var
    return keyArray;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    //Create a var that takes on an array
    var kString = [];
    //Create a for in loop that accesses the keys
    for (var key in object){
        //Push keys into the var you created
        kString.push(key);
    }
    //Make the var equal the array joined
    kString = kString.join(' ');
    //Return var
    return kString;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //Create a var that takes on an array
    var vString = [];
    //Use a for in loop to access the key values of the object
    for (var key in object){
        //Push the key values into the var vString
        vString.push(object[key]);
    }
    //Create a bin for the string key values that takes on an array
    var vStrings = [];
    //Create a for loop that loops through the var vString bin
    for (var i = 0; i < vString.length; i++){
        //Create an if conditional that checks if any of the indexs are equal to a string
        if (typeof vString[i] === "string"){
            vStrings.push(vString[i]);
        }
    }
    return vStrings.join(' ');
}
//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //Create a conditional that checks if something is an array or not
    if (Array.isArray(collection)){
        //Return array
        return "array";
    } else { //If something is not an array
        //Return object
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //Create a bin for the split of the string
    var sArray = string.split("");
    //Create a bin for the uppercase string of first index in sArray
    var capChar = sArray[0].toUpperCase();
    //Use the splice method to remove the old first letter and add the new first letter
    sArray.splice(0, 1, capChar);
    //Use the join method to return sArray together
    return sArray.join('');

}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //Create a var bin for the split string
    var wArray = string.split(" ");
    //Create another var bin to store the wArray strings but with the first characters upper cased.
    var upArray = [];
    //Create a for loop that will look at all the indexes in wArray
    for (var i = 0; i < wArray.length; i++){
        //Push the concated functions capitalizing the wArray current index first character with the rest of the indexes characters
        upArray.push(wArray[i][0].toUpperCase() + wArray[i].slice(1));
    }
    //Return wArray joined
    return upArray.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    //Object should have a name property, and if not we need to find out if it does
    //Must take into account case sensitivity
    //Create a var for the letter in the key value we are gonna upperCase
    var upperChar;
    //Create a var that will take on the whole string value with the upperChar var
    var newObjValue;
    //Create a if conditional to check if the object has a name property
    if ("name" in object){
        //capitalize the first letter in the name property and assign it to upperChar
        upperChar = object.name[0].toUpperCase();
        //Assign object.name to the concated upperChar var and the sliced portion of the value at the 1 index
        object.name = upperChar + object.name.slice(1);
        //Assign newObjValue to object.name
        newObjValue = object.name;
    }
    //Return the message
    return "Welcome " + newObjValue + "!";
    

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    //Object must be checked if it has name and species properties
    //Must take in case sensitivity
    //Create a couple of variable to put things in
    var upperNameChar; //For the first letter in name capitalized
    var upperNameSpec; //For the first letter in species capitalized
    var newObjName; //For the concated upperNameChar and the rest of the string at object.name
    var newObjSpec; //For the concated upperNameSpec and the rest of the string at object.name
    //Now that we have all the variables, we can now use a conditional that checks if both the name key and the species key are in the object
    if ("name" in object && "species" in object){
        //Now we can use some of these variables. Use the .toUpperCase method to capitalize both the name and species key values first character
        upperNameChar = object.name[0].toUpperCase();
        upperNameSpec = object.species[0].toUpperCase();
        //Now make object.keyvalue equal concat the first 2 variables with their respective key values
        object.name = upperNameChar + object.name.slice(1);
        object.species = upperNameSpec + object.species.slice(1);
        //With that done, make other 2 variables equal object.keyValue we just assigned
        newObjName = object.name;
        newObjSpec = object.species;
    }
    //Return the message to the console
    return newObjName + " is a " + newObjSpec;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    //Create a for in loop to access the objects keys
    for (var key in object){
        //We will push the name string into the friends array if it exist
        if(object.key === object.friends){
            //Return a push command into the friends key in object
            return object.push(object.key);
        }
    }

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}