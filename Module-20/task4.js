/*
===> Task-4
Count the `number of properties`.
**Input:**
```Copy the js code below:
let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
```
**Output:**
    4 
*/
let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true,
};
let count = 0;
for(let prop in student){
    count++;
    console.log(student[prop]);
}

console.log(count);