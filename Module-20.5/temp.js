const readLine = require('prompt-sync')();

// Read user input
let temperature = parseInt(readLine('Enter todays temp: '));
console.log(`The temperature is ${temperature}`);

if (temperature > 70) {
    console.log(console.log(`The temperature is ${temperature}`, "It's very warm outside");
} else if (temperature >= 30 && temperature <= 69) {
    console.log("It's not warm or cold either");
    let temperature = 60;
    console.log(`The temperature is ${temperature}`);

    if (temperature > 40) {
        console.log("It's warm outside");
    }
} else {
    console.log("It's cold man!")

}