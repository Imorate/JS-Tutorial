const Util = require('../util/ObjectUtil');

/*
  Declare object

  {} symbols are object literal.
  Objects consists of key-value pairs.
 */
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20
};

Util.printTypeOf({ person });

// Access object property with dot notation
console.log('Person first name:', person.firstName);

/*
  Access object property with bracket notation.
  This is a good approach when property name of an object become selected
  on runtime.
 */
let objectField = 'lastName';
console.log('Person last name:', person[objectField]);
