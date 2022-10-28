/**
 * STRING MANIPULATION
 * 
 * 0: There are many methods and operators that can change a string. This is considered string manipulation
 * 
 * 1: With Operators
 * 
 * 2: With String Methods
 * 
 */

// 1 // With Operators
//You can concatinate strings using the Addition operator
let example = "Hello" //This is the base we are starting with
example += " World!" //Prints "Hello World!"

// 2 // With String Methods
//There are many prototype methods built into JS that can manipulate a string
//All method return new strings as strings are immutable
let string = "hello" //Base
string.length; //Length will give you number of characters in a string; 5
string.slice(1, end); //Slice will give you the characters at the sliced index; ello !!!Slice will also stop where you put the end index!!!
string.substring(1, end); //Substring will do the same as slice, except values less than 0 as 0; ello
string.substr(1, 3); //Substr goes deeper than bot Substring and Slice, starting at the index of choice and ending at the count which is the second parameter; ell !!!Substr can count backwards if it takes in a negative number starting at the last index
string.replace('hello', 'hi'); //Replace will take a part of a string and replace the first instance of the string portion with another and produce a new string; hi, but original will still be hello !!!Regular Expression or REGEX is very useful in this case as it can take symbols, whites spaces, digits, and letters in the string out
string.replaceAll('hello', 'hi'); //ReplaceAll will do what replace does, except to all instances of the word, symbols, digits or letters will be replaced; hi
string.toUpperCase(); //ToUpperCase will take a string and return a string that is capitalized; HELLO
string.toLowerCase(); //ToLowerCase will take a string and return a string that is lower-cased; hello
string.concat("world"); //Concat will do like the addition operator and combine a string with another string to make 1 string; hello world
string.trim(); //Trim will get rid of all the white space at the beginning and end of string
string.trimStart(); //TrimStart will only trim the beginning of the string
string.trimEnd(); //TrimEnd will only trim the end of the string
string.padStart(); //PadStart adds white space to the beginning of the string
string.padEnd(); //PadStart adds white space to the end of the string
string.charAt(0); //CharAt returns the character at that index; h
string.charCodeAt(0); //CharCodeAt returns a unique number code between 0 and 65535
string[0]; //This method is a hardcoded version of charAt that gives you the value at that index or in this case the character at this index; h
string.split(""); //Split method takes a string and splits it at the given parameter and returns an array of the split characters; [h, e, l, l, o]