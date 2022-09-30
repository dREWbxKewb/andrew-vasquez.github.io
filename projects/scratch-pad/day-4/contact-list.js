// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    //1 //Create a var obj as object literal
    var obj = {};
    //Pass the parameter values to obj as keys
    obj.id = id;
    obj.nameFirst = nameFirst;
    obj.nameLast = nameLast;
    //Return obj var
    return obj;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = []; // Make contacts equal to array literal
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        // Create an addContact key that produces a function with the interger contact
        addContact: function(contact){
            //Push contact interger into contacts array
            contacts.push(contact);
        },
        // Create a findContact function that produces a function with the interger fullName
        findContact: function(fullName){
            //Create a for loop that loops the contacts array for the object
            for (var i = 0; i < contacts.length; i++){
                // Create var that concatinating the nameFirst value and nameLast value in contacts array
                var fName = contacts[i].nameFirst + " " + contacts[i].nameLast;
                //Create a condition that takes var fName and strictly compares to fullName equally
                if (fName === fullName){
                    //return the object
                    return contacts[i];
                } 
            }
            //If loop does not find a match return undefined
            return undefined;
        },
        //Create a function that removes the contact for array
        removeContact: function(contact){
            //Create a for loop that access the contact index
            for (var i = 0; i < contacts.length; i++){
                //Create a conditional statement that compares the contact index property values with each other
                if(contacts[i].id === contact.id && contacts[i].nameFirst === contact.nameFirst && contacts[i].nameLast === contact.nameLast){
                    //Remove the object from the array with splice
                    contacts.splice(i, 1);
                }
            }
        },
        //Create function called printAllContactNames
        printAllContactNames: function(){
            //Create a var with string literal
            var cString = "";
            //Create a for loop that accesses the contacts array
            for (var i = 0; i < contacts.length; i++){
                //Create a conditional that checks if you have reached the last index
                if(i === contacts.length - 1){
                    //Add the concatinated nameFirst and nameLast values to cString
                    cString += contacts[i].nameFirst + " " + contacts[i].nameLast
                } else { // If not the end of the index
                    //Add the concatinated values and add new line character
                    cString += contacts[i].nameFirst + " " + contacts[i].nameLast + "\n";
                }
            }
            //return var
            return cString;
        }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
