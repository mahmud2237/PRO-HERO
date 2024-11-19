/***
 * Write a code that will input a name from user and give the output of good and bad names depend of the last 
 * letter of their names. If last letter includes a, y, i, e, o, u, w than those names will be considered 
 * as good names.
 * input: salman  output: Bad names     
 * input: RAFEE   output: Good names
 * input: 199     output: invalid
 * input: ["Rashed"] output: invalid
 */

function checkName (name){
    if(typeof name !== 'string'){
        return 'Invalid';
    }

    let lastLetter = name.slice(-1).toLowerCase();
    let checkArray = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
    let result = false;
    /*
    if(checkArray.includes(lastLetter)){
        result = 'Good name';
        return result;
    }else{
        result = 'Bad name';
        return result;
    } */
//Another Solution is below: 
    for(let char of checkArray){
        if(lastLetter === char){
            result = true;
        }
    }
    return result? 'Good name' : 'Bad name';  // Ternary operator used for concise code.
}
console.log(checkName('Salman'));
console.log(checkName('RAFEE'));
console.log(checkName(199));
console.log(checkName(["Rashed"]));










