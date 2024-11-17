const prices = [20000, 16000, 50000, 100000, 12000, 30000, 35000];
function getmin (numbers){
    let min = numbers[0];
    for(const num of numbers){
        // console.log(numbers);
        if(num < min){
           min = num; 
        }
    }
    return min;  // return the minimum value
}

const cheap = getmin(prices);
console.log('cheapest one is: ', cheap);














