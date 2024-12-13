// 'type Coercion' for the (==), (===) or other comparison
// type conversion
// always use ===
// equal comparison doesn't work for non-primitive type

const first = 2;
const second = '2';
if(first === second){   
    console.log('Both values are equal');
}else{
    console.log('Both values are not equal');
}

