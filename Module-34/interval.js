// setTimeout and clearTimeout
console.log(1);
console.log(2);
setTimeout(() => { 
    console.log(3);   
    
});
// clearTimeout(); // it's exicutes one time so no need to use this but if needed then to stop the timeout
console.log(4);
console.log(5);
console.log(6);
setTimeout(() => { 
    console.log(7);   
    
}, 1900);
// setTimeout and setInterval is quite similar
const intervalId = setInterval(function(){
    console.log(8);
    clearInterval(intervalId);   // Pass the interval ID to stop the interval
}, 2000)


let num = 0;
const clockId = setInterval(() => {
    num++;
    if(num > 6){
        clearInterval(clockId);  // Pass the interval ID to stop the interval
    }
    console.log(clockId, num);
}, 2000)










