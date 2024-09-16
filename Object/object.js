import Util from '../Utils/Util.js';

// Declare object
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20
};

Util.printTypeOf(person);

// Dot notation
console.log(`Person first name: ${person.firstName}`);

// Bracket notation
let objectField = 'lastName';
console.log(`Person last name: ${person[objectField]}`);
