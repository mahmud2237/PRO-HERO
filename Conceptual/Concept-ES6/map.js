// forEach and map works like similar
// But always try to use Map. That's will help in future
const arr = [10, 20, 30, 40, 50];
// as like forEach. first one will be the item/key, than index and last one will be the whole array
arr.map((item, index, whole) => {
    console.log(`item: ${item} index: ${index} and the whole Array is: ${whole}`);

});

// we can get the keys like below:
arr.map((item) => console.log(item));

// N: B: we can get output by using map in a variable which isn't possible in forEach
const result = arr.map((a) => a);
console.log(result);
// we can only put it in variable in map function. Remember it
const result1 = arr.map((a) => a * 2);
console.log(result1);
console.log(arr);  // arr function is still the same
// when we need to write to much code in {}, then only we need to call return to get output
const result3 = arr.map((item) => {
    const sum = item + 5;
    return sum;
});
console.log(result3);
