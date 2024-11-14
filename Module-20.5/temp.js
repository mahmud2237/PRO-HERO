const readLine = require('prompt-sync')();

// Read user input
let temperature = parseInt(readLine('Enter todays temp: '));
// console.log(`The temperature is ${temperature}`);

if (temperature > 70) {
    console.log(`The temperature is ${temperature} and It's very much warm outside`);
} else if (temperature >= 20 && temperature <= 69) {
    console.log(`The temperature is ${temperature} and It's not warm or cold either`);
} else {
    console.log(`The temperature is ${temperature} and It's cold man!`)

}