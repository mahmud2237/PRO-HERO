const mobile = {
    brand: 'dell',
    price: 34000,
    color: 'black',
    camera: '12mp',
    isNew: true
}
console.log('-------> Mobile props are: ');
for(const prop in mobile) {
    console.log(prop);
}
console.log('-------> Mobile values are: ');
for(const value in mobile) {
    console.log(mobile[value]);
}

console.log('-------> Show Mobile Object property names in an array: ');
const keys = Object.keys(mobile);
console.log(keys);

console.log('-------> Show Mobile Object property values in an array: ');
const values = Object.values(mobile);
console.log(values);




