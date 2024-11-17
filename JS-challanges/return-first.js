/***
 * Write a function to return the first element of an array.
 * input: arr[] = [40, 25, 16, 72]          Output: 40
 */
function getFirstElement(array){
    // return array[0];
    for(let arr of array){
        return arr;
        break; // If you want to return first element without breaking loop
    }
}

console.log(getFirstElement([40, 25, 16, 72])); // Output: 40







