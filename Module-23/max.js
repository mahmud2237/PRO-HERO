const readLine = require('prompt-sync')();
const Disha = String(readLine(`Enter Disha's Number: `));
const Salman = String(readLine(`Enter Salman's Number: `));

if(Disha > Salman){
    console.log('Disha is the winner');
}else{
    console.log('Salman is the winner');
}

console.log('<-------- Another Way to get Max by using function -------->');
function getMax(Disha, Salman){
    return Math.max(Disha, Salman);
}
console.log(`${Disha} and ${Salman}, from these numbers the max is: `, getMax(Disha, Salman));

console.log('<-------- Another Way using function -------->');
function goToMax(Disha, Salman){
    if(Disha > Salman){
        return `Disha's number is Max`;
    }else{
        return `Salman's number is Max`;
    }
}
console.log(goToMax(Disha, Salman));









