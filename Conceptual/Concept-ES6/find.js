const numbers = [12, 32, 25, 75, 13, 54, 97, 25];

let find = null;
for (let item of numbers){
    if(item > 50 && item % 2 === 0){
        find = item;
        break;
    }
}
console.log(find);

// same thing using find below:
const result = numbers.find((item) => item > 50 && item % 2 === 0);
console.log(result);
console.log(!!result);


// N: B: If we didn't find any value, then we will get undefined as an output
// and we know undefined is a falsy value. So, in find we can get truthy and falsy both value.
