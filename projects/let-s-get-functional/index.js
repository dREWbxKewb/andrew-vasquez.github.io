// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');
const { map } = require('lodash');

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
        //Determine if the current age is greater than the oldest value
        if (curr.age > oldest){
            //Make oldest variable equal the current age
            oldest = curr.age;
            //Make the seed equal the current name
            pre = curr.name;
        }
        //Return the seed
        return pre;
    }, '');
}

var youngestCustomer = function(array){
    //Create a var to hold youngest age
    let youngest = 100000
    //Implement _.reduce() to return the name of the oldest person
    return _.reduce(array, function(name, youngObj){
        //Determine if the youngest value is equal to the youngObj age
        if (youngObj.age < youngest){
            //Make the youngest value equal the age
            youngest = youngObj.age;
            //Make the seed equal the name
            name = youngObj.name;
        }
        //Return name
        return name;
    }, '');
}

var averageBalance = function(array){
    //Implement the reduce function
    return _.reduce(array, function(aBalance, obj, i, array){
        //Increment the seed by the indexes balance key value with the $ sign and , removed and divid by the array's length
        aBalance += obj.balance.replace(/[$,]/g, '') / array.length;
        //Return the seed
        return aBalance;
    }, 0);
}

var firstLetterCount = function(array, letter){
    //Implement the reduce function
    return _.reduce(array, function(result, first, i, array){
        //Determine if the letter param is equal to the array indexes name value's zero index is equal
        if (letter.toUpperCase() === first.name[0].toUpperCase()){
            //Increment the result if so
            result++;
        }
        //Return the incremented result
        return result;
    }, 0);
}

var friendFirstLetterCount = function(array, customer, letter){
    //Implement the reduce function
    return _.reduce(array, function(result, obj, i,){
        //Determine if the obj name is equal to the customer para
        if (obj.name === customer){
            //If so, loop through the obj friends array
            for (var i = 0; i < obj.friends.length; i++){
                //Determine if the letter para is equal to the obj friends name value's first char
                if (letter.toUpperCase() === obj.friends[i].name[0].toUpperCase()){
                    //Increment the result
                    result++;
                }
            }
        }
        //Return the result
        return result;
    }, 0)
}

var friendsCount = function(array, name){
    // Implement the reduce function
    return array.reduce(function(result, obj){
        //Iterate throught the friends array in obj
        for (var i = 0; i < obj.friends.length; i++){
            //Determine if the name para is equal to the name at the index of friends in obj
            if (name === obj.friends[i].name){
                //Push the obj's name into the result
                result.push(obj.name);
            }
        }
        //Return the result
        return result;
    }, [])
}

var topThreeTags = function(array){
    //Implement the each function
    let map = {};
    _.each(array, function(obj){
        _.each(obj.tags, function(tag){
            map[tag] = (map[tag] || 0) + 1;
        });
    });
    let topArr = _.map(Object.keys(map), obj => [obj, map[obj]]).sort((a, b) =>  a[1] - b[1])
    
    let output = topArr.slice(-3);
    for (var i = 0; i < output.length; i++){
        output[i].pop();
    }
    let newArr = [];
    newArr = newArr.concat(output[0], output[1], output[2]);
    return newArr;
}

var genderCount = function(array){
    //Implement the reduce method
    return array.reduce(function(object, obj){
        //Implement the filter method
        let mValue = array.filter(function(customer){
            //Return the male objects into an array
            return customer.gender === "male";
        });
        //Create a male key in the seed object with the value of the number of objs in mValue
        object.male = mValue.length;
        //Implement the filter method
        let fValue = array.filter(function(customer){
            //Return the female objects into an array
            return customer.gender === "female";
        });
        //Create a female key in the seed that is equal to the length of the fValue array
        object.female = fValue.length;
        //Implement the filter method
        let nbValue = array.filter(function(customer){
            //Return the non-binary objects into an array
            return customer.gender === "non-binary";
        });
        //Create a non-binary key that equals the length of the nbValue array
        object["non-binary"] = nbValue.length;
        //Return the seed object
        return object;
    }, {})
}

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
