const heights = [65, 66, 68, 72, 78, 60, 65, 66];
function getMaxFromArray(arr) {
    // console.log(arr);
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return `Using for loop the max is ${max}`;
}

console.log(getMaxFromArray(heights));

console.log('<-------- Another Way below -------->');
const numbers = [ 34, 45, 65, 78, 99, 54, 32, 21]
function getMaxUForOf(arr) {
    
    let max1 = arr[0];
    for (const num of arr) {
        // console.log(num);
        if (num > max1) {
            max1 = num;
        }

    }
    return `Using for...of the max is: ${max1}`;
}

console.log(getMaxUForOf(numbers));