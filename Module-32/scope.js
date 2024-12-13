function add (a, b){
    const total = a + b;
    if(b > 5){
        const sum = 25 + a + b;
    }else{
        const sum = 10 + a + b;
        var current = sum;
    }
    // console.log(sum);  // sum is following a block scope. So, ReferenceError: sum is not defined here
    console.log('current is:' ,current);
    return total;
}
// console.log(a, b); // This will be a ReferenceError: because a, b is not defined
// console.log(total); // total is following block scope so this will be given a ReferenceError 
add(5, 7);



