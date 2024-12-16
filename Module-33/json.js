
const user = {id: 1, name: 'Gorib Aamir', job: 'actor'};
console.log(user);
// // javaScript Object Notation(JSON)
// const stringified = JSON.stringify(user);
// console.log(stringified);  // {"id":1,"name":"Gorib Aamir","job":"actor"}

const shop = {
    owner: 'Alia',
    address: {
        street: 'kochukhet voot er goli',
        city: 'Dhaka',
        country: 'Bangladesh'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
};
console.log(shop);   // This typeof is Obj
// Now make JSON to shop
const shopJSON = JSON.stringify(shop);  // json stringify makes it object to string
console.log(shopJSON);  // Now this typeof is string
// again if we need to convert it string to object than we need to parse it
const shopOBJ = JSON.parse(shopJSON);  // json parse makes it string to Object
console.log(shopOBJ);  // here the typeof is Obj as like the original shop Obj









