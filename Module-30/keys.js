const glass = {
    name: 'glass', 
    color: 'golden',
    shape: 'round',
    weight: 200,
    price: 1500,
    isClean: true,
}

console.log(glass);
// if need all keys than
const keys = Object.keys(glass); 
console.log(keys);
// if need all values than
const values = Object.values(glass);
console.log(values);
// if need all keys and values in pair // array of array // two dimentional array
const entries = Object.entries(glass);
console.log('Entries are: ', entries);

// if want to delete any property
delete glass.shape; // deleting shape property from glass
console.log(glass);
// another hard way to delete
const {weight, ...shortGlass} = glass; // deleting weight from glass
console.log(shortGlass);

// if want to freeze the properties
// Object.freeze(glass); // for this, next all process will be freeze // uncomment and see
glass.source = 'Bangladesh';
console.log(glass); 

// object seal is relaxing
Object.seal(glass); // you can change the existing properties but can't add new properties. 
// Also can't remove or delete the properties
glass.source = 'in BD';
console.log(glass); 
