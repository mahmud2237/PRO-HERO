const pen = {
    brand: 'eco',
    price: 10,
    color: 'black',
}

// Create new null Objects
const pencil = new Object();
console.log(pencil);

const rubber = Object.create({});
console.log(rubber);
//Now put Object propery and values in pencil and rubber

pencil.brand = 'pen';
pencil.price = 5;
pencil['color'] = 'blue';
console.log(pencil);

rubber['brand'] = 'rubber';
rubber.price = 7;
rubber.color = 'white';
console.log(rubber);

// We can also create Object property and values like below:
const orgObject ={
    company: 'ABC',
    worker: 40,
}
const employee = Object.create(orgObject);
console.log(orgObject);
console.log(employee.company);
// access worker by labour variable
var labour = "worker";
console.log(orgObject);
console.log(orgObject[labour]);







