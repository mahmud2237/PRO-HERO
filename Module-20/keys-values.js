const computer = {
    brand: 'lenovo',
    price: 54000,
    processor: 'intel',
    sdd: '512gb',
}

// To Get all keys and values in array of the object
const keys = Object.keys(computer);
console.log('Keys are: ', keys);

const values = Object.values(computer);
console.log('Values are:', values);


// To get keys and values output in one code is below:
for (let prop in computer){
    console.log(prop);
    console.log(computer[prop]);
}




