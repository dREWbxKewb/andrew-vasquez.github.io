// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./andrew-vasquez.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    //Implement _.filter to return array of only male customers
    let males = _.filter(array, function(customer){
        //Return true if the input customer is male
        return customer.gender === 'male';
    });
    return males.length;
};

var femaleCount = function(array){
    //Implement _.reduce() to return number of female customers
    return _.reduce(array, function(acc, current, index, array){
        //determine if customer is female
        if (current.gender === 'female'){
            acc += 1; //acc = acc + 1;
        }
        return acc; //returns 1
    }, 0);
}

var oldestCustomer = function(array){
    //Create a var to hold max age
    let oldest = 0
    //Implement _.reduce() to return the name of the oldest person
    return _.reduce(array, function(pre, curr){
      if (curr.age > oldest){
        oldest = curr.age;
        pre = curr.name;
      }
      return pre;
    }, '');
}

var youngestCustomer = function(array){
    //Create a var to hold max age
    let youngest = 0
    //Implement _.reduce() to return the name of the oldest person
    return _.reduce(array, function(pre, curr){
      if (curr.age < youngest){
        oldest = curr.age;
        pre = curr.name;
      }
      return pre;
    }, '');
}

var averageBalance;

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
