// if value isn't provided than use default value
function add (num1 = 0, num2 = 0){
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}

const sum = add(10);
console.log(sum);


// for array function default value will be...
function friends (numbs = []){
    console.log(numbs);
}

// for object function default value will be... 
function person(human = {}){
    console.log(human);
}

