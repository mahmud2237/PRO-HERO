const country = 'Bangladesh';
const division = "Newkhale";
const district = `Dinajpur`;

const thana = new String ('Demra');

console.log('Country is:', typeof country ,'=>', 'Division is:', typeof division ,'=>', 'District is:', typeof district ,'=>', 'Thana is:',typeof thana);

// Let's see String is immutable but array is mutable..
const capital = 'Dha ka';
console.log('Capital length is: ', capital.length);
console.log(capital[1]);
console.log(capital[3]);
console.log(capital[5]);
// String is immutable see below: 
console.log(capital);
capital[0] = 'F';   // But in array it's mutable or possible to change
console.log(capital);





