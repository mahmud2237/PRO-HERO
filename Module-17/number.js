var orangePrice = 20;
var chocolate = 0.5;
var applePrice = '25';
console.log(typeof orangePrice);
console.log(typeof chocolate);
console.log(typeof applePrice);

var total = orangePrice + chocolate;
console.log("total value is", total);

var total1 = total + applePrice;  // when applePrice is a string
console.log("total1 value is", total1);

var total2 = total + parseFloat(applePrice);  // convert applePrice as a Float
console.log("total2 value is", total2);