import Util from '../Utils/Util.js';

// Declare function without parameter
function test() {
  console.log('Inside test function');
}

// Declare function with parameter
function square(num) {
  return `Inside square function, value: ${num * num}`;
}

Util.printTypeOf(test);
Util.printTypeOf(square);

// Invoke test function
test();

// Invoke square function that returns square of 2
console.log(square(2));