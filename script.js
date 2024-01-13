console.log("Working");

/*Write the code, one line for each action:
    Create an empty object user.
    Add the property name with the value John.
    Add the property surname with the value Smith.
    Change the value of the name to Pete.
    Remove the property name from the object.
*/
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
console.log(user);

/*Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.*/
let empty = {};
//Object.keys returns an array of the key sin an object
//If the array length is zero, the object is empty
function isEmpty(userObj) {
  if (Object.keys(userObj).length == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEmpty(empty));

//another way of achieveing the same outcome
function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}

/*Write the code to sum all salaries and store in the variable sum. If salaries is empty, then the result must be 0.*/
let salaries = {};

function sumObj(obj) {
  let total = 0;
  for (let key in obj) {
    /*Access the property value using square bracket notation
    it has to be brackets in order for this to be dynamic.
    if we say obj.key the function looks for a specific key named "key"*/
    console.log(obj[key]);
    total += obj[key];
  }
  console.log(total);
}
sumObj(salaries);

/*Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2. */

// before the call
let menu = {
  width: 200,
  height: 100,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    //check if we're dealing with a numeric value
    if (typeof obj[key] == "number") {
      console.log(obj[key] * 2);
      obj[key] = obj[key] * 2;
    }
  }
}
multiplyNumeric(menu);
console.log(menu);
