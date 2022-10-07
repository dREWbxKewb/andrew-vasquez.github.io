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
    //Create a if condition that checks if the object has a name property
    if(object.name){
        //Return message 'Welcome 'insert name here'!'
        return 'Welcome ' + (object['name'][0].toUpperCase + object['name'].slice(1)) + "!";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {

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