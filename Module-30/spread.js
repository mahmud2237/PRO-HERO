const max = Math.max(3, 34, 54, 2, 23, 65);
console.log(max);

const numbers = [3, 4, 65, 2, 34, 56, 78];
console.log(...numbers);
const arrayMax = Math.max(...numbers);
console.log(arrayMax);

// use spread operator to copy
const friends = [4, 5, 67, 34];
const dost = [...friends];
console.log(dost);

const bondhu = friends;
bondhu.push(12);
console.log(bondhu);
console.log(friends);








