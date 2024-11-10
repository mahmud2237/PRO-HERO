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