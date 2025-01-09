// noinspection JSUnusedAssignment, JSUnusedLocalSymbols

const Util = require('../util/ObjectUtil');

// Google Chrome console shortcut: Ctrl + Shift + J
console.log('Hello World!');

// When a variable doesn't initialize, the default value will be undefined
let a;
Util.printTypeOf({ a }); //undefined

/*
  Variable names must start with a letter, an underscore (_) or a dollar sign ($)
  Variable names are case-sensitive and must not contain hyphen(-) and spaces
 */
let _;
let $;
let variable;
// let 1test; invalid variable name

// Multiple variable declaration and initialization
let b, c;
let d = 1, e = 2;
console.log(`Multiple variable declaration [d = ${d}, e = ${e}]`);

// Declaring constant
const PI = 3.14;
Util.printTypeOf({ PI });

/*
  Primitive / Value types:
    1. Number
    2. String
    3. Boolean
    4. undefined
    5. null
    6. BigInt
    7. Symbol
 */
let firstName = 'John'; //String literal
let lastName = undefined;
let age = 20; // Number literal
let isApproved = false; // Boolean literal
let address = null;

Util.printTypeOf({ firstName });
Util.printTypeOf({ lastName });
Util.printTypeOf({ age });
Util.printTypeOf({ isApproved });
Util.printTypeOf({ address });

/*
  Reference Type:
    1. Object
    2. Array
    3. Function
 */