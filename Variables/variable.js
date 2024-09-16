// noinspection JSUnusedAssignment
// noinspection JSUnusedLocalSymbols

import Util from '../Utils/Util.js';
// Google Chrome console shortcut: Ctrl + Shift + J
console.log('Hello World!');

// When a variable doesn't initialize, the default value will be undefined
let a;
console.log(`'a' is ${a}`); //undefined

/*
  Variable names must start with a letter, an underscore (_) or a dollar sign ($)
  Variable names are case-sensitive
 */
let _;
let $;
let variable;
// let 1test; invalid variable name

// Multiple variable declaration
let b, c;
let d = 1, e = 2;
console.log(`Multiple variable declaration [d = ${d}, e = ${e}]`);

// Declaring constant
const PI = 3.14;
console.log(`PI = ${PI}`);

/*
  Primitive / Value types:
    1. Number
    2. String
    3. Boolean
    4. undefined
    5. null
 */
let firstName = 'John'; //String literal
let lastName = undefined;
let age = 20; // Number literal
let isApproved = false; // Boolean literal
let address = null;

Util.printTypeOf(firstName);
Util.printTypeOf(lastName);
Util.printTypeOf(age);
Util.printTypeOf(isApproved);
Util.printTypeOf(address);