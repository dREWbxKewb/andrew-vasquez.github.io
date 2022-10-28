/**
 * CONTROL FLOW
 * 
 * 0: Control Flow is giving structure to code that check if certain things are true or false and executes
 *    in this case we would consider these conditional chains that can control the flow of your code and
 *    create checks
 * 
 * 1: If
 * 
 * 2: Else-if
 * 
 * 3: Else
 * 
 * 4: Switch
 */

// 1 // If
//If is a start of a chain for conditionals
if (condition){
    return;     //This is a standard way to write the conditional, if is created as a keyword, it takes in a condition which can be most comparison operators or code that would print true or false
}               //If the condition proves true, and must prove true to move on, then will execute something. The example conditional returns, which would exit the conditional
//If statement are good ways to put checks in the code to run something

// 2 // Else-if
//We created a condition to start, but what if you have multiple checks to make
//Else if is a addon to your chain that allows you to create another check
if(condtion){
    return;
} else if (next condition){ //When making a new else if, it's cleaner to declare it after the if's end brace
    return;                 //You will then pass in the next condition you are checking for, and returning something new if true
}
//You can create an infinite amount of chains for the infinite amount of condition you can check

// 3 // Else
//Else if can continue to chain infinitely, and really multiple if statement can do the same things, however it cleaner to chain conditions, and end those chains with a final action
//Else condition will basically end a chain by returning something if none of the above chain is true
if (condition){
    return;
} else if (new condition){
    return;                 //Just like with the else if statement we create our else statement at the end brace for clean code
} else {                    //Else doesn't need a condition as it doesn't care about true, only if the above is false
    return;                 //Executes a code if that is the case
}
//Else statement can be important to stopping a code as a default, but also most code can write a stop code outside the if chains in cases cause it less memory to do so

// 4 // Switch
//Switch is unique, as instead of created long chains of if/else ifs, switch takes an expression and executes code based on differnect conditions in make
let fruits = ["apple", "pear", "pinapple"];
switch(fruits){ //Expression is passed in
    case "apple": //Case is created, this checks if the expression is the same as value
        console.log("yummy") //Executed code happens if match is made
        break; //This functions like return where it stop the code from running
    default: //This is the end result if none of the cases hit
        console.log("fruit is good :)"); //Will print this to console
}