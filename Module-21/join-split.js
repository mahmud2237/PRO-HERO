const things = ['pen', 'ben', 'chen', 'fan'];
const joins = things.join('');
console.log(`Using join(''): `, joins);
const joins1 = things.join(' ');
console.log(`Using join(' '): `, joins1);
const joins2 = things.join(',');
console.log(`Using join(','): `, joins2);
const joins3 = things.join('-');
console.log(`Using join('-'): `, joins3);

// now working with split
const splits = joins1.split(' ');
console.log(`Using split ' ': `, splits);

const splits1 = joins2.split(',');
console.log(`Using split ',': `, splits1);

const splits2 = joins3.split('-');
console.log(`Using split '-': `, splits2);

// check if these Exp variables are Array or not 
console.log(`Is 'things' an Array: `, Array.isArray(things));
console.log(`Is 'joins' an Array: `, Array.isArray(joins));
console.log(`Is'splits' an Array: `, Array.isArray(splits));
















