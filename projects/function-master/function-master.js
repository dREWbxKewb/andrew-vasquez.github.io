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
    //Object must be checked if it has a noises key value equal to an array of strings
    //However, we also have to take into account if it doesn't or does not exist or doesn't have any strings in the array
    //Create a variable for the array in noise key
    var objArray;
    //Use a conditional that checks if the object have a noises key, if it has an array, and if the array is not empty
    if("noises" in object && Array.isArray(object.noises) && object.noises.length !== 0){
        //make the array equal the variable we created
        objArray = object.noises
    } else { //We need this if none of the above is true
        //Return a message
        return 'there are no noises';
    }
    //Return the variable joined by spaces
    return objArray.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    //Needs to take the word and compare it to the string of strings and see if the word is in the string
    //Needs to return true if yes and false if no
    //Create a if condition using the includes method to check if the word is in the string
    if (string.includes(word)){
        //Return true
        return true;
    } else { //If the above isn't true
        //Return false
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    //Needs to push the name into the object's friends array
    //Must check if the object has a friends key and if that keyvalue is an array
    //Create a conditional that checks if object has friends key and if its an array
    if ("friends" in object && Array.isArray(object.friends)){
        //push the name into the friends array
        object.friends.push(name);
    }
    //Return the object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    //Must first check if friends key exist and whether its an array or not
    //Then must check how many values are in that array
    //Then must check if the name matches any of the indexed values in the array are a match
    //Finally must print true if so
    //Exception: if none of that is correct must print false
    //Create a if conditional that checks if friends is in object and if it's an array
    if ("friends" in object && Array.isArray(object.friends)){
        //Use a for loop to be able to access the array
        for (var i = 0; i < object.friends.length; i++){
            //Use this loop to compare if name is equal to any of them
            if(object.friends[i] === name){
                //Return true
                return true;
            }
        }
    }
    //return false
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    //Must take the array and check the indexes
    //Then we must check these indexes keys to find the name keyvalue and compare it to name
    //If name matches the index, then we need to scan if the index has a friends key
    //Then we need to check if the friends key matches the indexes name keyvalues
    //If not we must log the keyvalues into an array and return them
    //Create an array variable
    var nonFriendsArray = [];
    //Loop through the array to get indexes that we can access
    for (var i = 0; i < array.length; i++){
        //Create a variable that holds a false value
        var isTrue = false;
            //Create a new loop that loops through the friends array
            for (var x = 0; x < array[i].friends.length; x++){
                //Create a conditional that checks if name parameter is not equal to the keyvalue of name at index, and is equal to the index of friend keyvalue
                if (name !== array[i].name && name === array[i].friends[x]){
                    //Reassign boolean variable in first for loop
                    isTrue = true;
                }
            }
            //Create a conditional that checks if the name parameter is not equal to the keyvalue of name at index and var isTrue is false
            if (name !== array[i].name && isTrue === false){
                //Push the name keyvalue into the bin var
                nonFriendsArray.push(array[i].name);
            }
    }
    //Return the array variable that we created
    return nonFriendsArray;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    //Must take an object, key, and value
    //Must be able to change the key and value
    //If the key and value doesn't exist, create a new key with the value
    //Make the object become an array
    var entries = Object.entries(object);
    //Use a for loop to look through the index of entries
    for (var i = 0; i < entries.length; i++){
        //Create a conditional that checks if the zero index of each index is equal to the key parameter
        if (entries[i][0] === key){
            //Make the 1 index in the the index of object equal the value
            entries[i][1] = value;
        } else { //If not true
            //Push new array into entries array
            entries.push([key, value]);
        }
    }
    //Make the entries array variable into an object
    var newObject = Object.fromEntries(entries);
    return newObject;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    //Must take and object and an array of strings
    //Then must look at the properties and values and compare them to the array strings
    //Must return the object without the array string values
    //Create a for loop to check indexes of array
    for (var i = 0; i < array.length; i++)
    //Create a for in loop that checks keys in object
    for (var key in object){
        //Create a conditional that checks if the key is in the array
        if (key === array[i]){
            //Delete the key from the object
            delete object[key];
        }
    }
    //Return object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    //Must take an array and return an array of non duplicate values
    //Create a variable that we can set an array to
    //The set 
    var singleArray = [];
    //Create a for loop to look at the index of array
    for (var i = 0; i < array.length; i++){
        //Using the index, create a conditional that checks if singleArray has a value in it
        if (!singleArray.includes(array[i])){
            //Push the array index into singleArray
            singleArray.push(array[i]);
        }
    }
    //Return singleArray
    return singleArray;
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