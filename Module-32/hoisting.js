// hoisting
for ( var i = 0; i < 5; i++){
    console.log(i);
}
console.log('Outside', i);


// function hoisting
print5(); 
function print5(){
    console.log(5);
}

// but if we assign a function in an variable than this will not work the same as function hoisting

console.log(print10);
// print10(); // This is not a function. So, will get TypeError: print10 is not a function
var print10 = function(){
    console.log('Inside print10: ' , 10);
}

