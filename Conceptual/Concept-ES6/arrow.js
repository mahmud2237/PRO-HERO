// function info(){
//     return 'ki chai...?';
// }

// same thing we can do by arrow function
const info = () => 'ki chai...?';  // no need to write return in arrow functin

// const result = info();
// console.log(result);


// function double(x){
//     return x * 2;
// }
const double = (x) => x * 2;
console.log(double(3));

const add = (x = 0, y = 2) => {    // const add = (x = 0, y = 2) => x + y;
    const result = x + y;
    return result;
}
console.log(add(8));






