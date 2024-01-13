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

console.log(Object.keys(empty).length);

function isEmpty(userObj) {
  if (Object.keys(userObj).length == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEmpty(empty));
