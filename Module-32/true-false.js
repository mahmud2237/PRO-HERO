/**
    Truthy:
    1. true
    2. any number (+ve or -ve) except 0
    3. Any string other than empty string ('')
    4. '0' or 'false' like this all is string and truthy
    5. {empty object} and Object 
    6. [empty array] and Array
    7. !!value (double bang! bang!)

    Falsy:
    1. false
    2. 0 
    3. empty string ('')
    4. undefined
    5. null
    6. Nan
    7. !value (single bang!)
 */

let x = NaN;
console.log(x);
if(x){
    console.log('value of x is truthy');
}else{
    console.log('value of x is falsy');
  }


  