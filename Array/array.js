import Util from '../Utils/Util.js';

// Declare array
let colors = ['green'];

Util.printTypeOf(colors);

// Access to arrays length
console.log(`Colors length: ${colors.length}`);

// Change first element
colors[0] = 'red';

// Add new element
colors[1] = 'blue';

// Access first element at idx 0
console.log(`First colors element: ${colors[0]}`);

// Add new element with push function
colors.push('blue');

//Print whole array
console.log(colors);
