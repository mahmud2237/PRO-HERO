function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}
const kamalHeight = inchToFeet(56);
console.log(`Kamal's height in feet is ${kamalHeight}`);

// let's show this separately
function inchToFeet1(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' feet ' + inchRemaining + ' inch ';
    return result;
}
const hasanHeight = inchToFeet1(64);
console.log(hasanHeight);







