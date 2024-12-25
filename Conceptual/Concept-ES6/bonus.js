// const add = (obj) => {
//     return obj.a + obj.b;
// }

// we can do that destructuring like below:
const add = ({a, b}) => {
    return a + b;
}

const obj = {
    a: 3, 
    b: 4,
}
console.log(add(obj));




