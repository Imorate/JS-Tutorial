// Declare array
import Util from '../Utils/Util.js';

let colors = ['green'];

Util.printTypeOf(colors);

console.log(`Colors length: ${colors.length}`);

// Add new element
colors[0] = 'red';

console.log(`First colors element: ${colors[0]}`);

// Add new element with push function
colors.push('blue');