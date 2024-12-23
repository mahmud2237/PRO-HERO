const arr = [10, 20, 30, 40, 50];

// for(let item of arr){
//     console.log(item);
// }
// we can do this iteration using forEach or map
// forEach and map work as like the similar way  // arr.forEach((item) => item) // arr.map()


const show = (a) => console.log(a);
arr.forEach(show);

// Or same thing using direct forEach
arr.forEach((a) => {
    console.log(a);
}) 

// if I want to get total from the given arr
let sum = 0;
let total = arr.forEach((item) => {
    sum += item;
})
console.log(sum);

// callback parameters (item, index, whole array) // always first one will give item/keys than index and last one will give us the whole array
arr.forEach((item, index, whole) => {
    console.log(`index: ${index} item: ${item} and the whole Arr: ${whole}`);
});


// N: B: It's not possible to put forEach in a variable and get output. So, instead use map 
