// Code your solution here

// 1. findMatching - This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching(collection, stringToMatch) {
  // const makeArrayItemsLowerCase = [];

  // for(const item of collection) {
  //   // makeArrayItemsLowerCase.push(item.toLowerCase());
  //   makeArrayItemsLowerCase.push(item);
  // }

  const matchList = collection.filter (function (user){
    return user.toLowerCase() === stringToMatch.toLowerCase();
  });

  return matchList;
}




// 2. fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.
function fuzzyMatch(array, string) {
    const matchReturns = array.filter( function (user) {
        return user.startsWith(string);
    });

    return matchReturns;
}

// 3. matchName - This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.
function matchName(array, string) {

  const matchedReturn = array.filter( function (user) {
      return user.name === string;
  })

  return matchedReturn;
}