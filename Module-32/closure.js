function kitchen(){
    let roast = 0;
    return function(){
        roast++;
        return roast;
    } 
}

const firstServer = kitchen();
console.log(firstServer); // Output will be: [Function (anonymous)], because we didn't call the function
console.log(firstServer()); // 1 , because we call the function now
console.log(firstServer()); // 2 , because we call the function now
console.log(firstServer()); // 3 , because we call the function now







