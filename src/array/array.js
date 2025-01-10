const Util = require('../util/ObjectUtil');

/*
  Declare array with array literal []
 */
let colors = ['red'];

Util.printTypeOf({ colors });

// Access to arrays length
console.log('Colors length:', colors.length);

// Change first element
colors[1] = 'green';

// Add new element
colors[2] = 'blue';

// Remove last array element with pop function
colors.pop();

// Access first element at idx 0
console.log('First colors element:', colors[0]);

// Add new element with push function
colors.push('blue');

//Print whole array
Util.printTypeOf({ colors });

/*
  TypeOf array is object.
  typeOf array's elements can change during runtime and it's dynamic.
 */
