/*
function make_avg(Grades) {
    console.log(Grades.length);
    let grade = 0;
    for (let i = 0; i < Grades.length; i++) {
        grade += Grades[i];
    }
    let avg = grade / Grades.length;
    console.log(avg);
}
let Grades = [85, 90, 78, 92, 88];   //output: 86.6
make_avg(Grades);

*/
// Let's solve it by using other formula:
/*
function make_avg(Grades1) {
    console.log(Grades1.length);
    const average = Grades1 => Grades1.reduce((a, b) => a + b) / Grades1.length;
    console.log(average(Grades1));
}
let Grades1 = [87, 94, 80, 92, 88];   // output: 88.2
make_avg(Grades1);
*/
// using another formula:
/*
function make_avg(Grades2) {
    console.log(Grades2.length);
    let avg1 = (eval(Grades2.join('+'))) / Grades2.length;
    console.log(avg1);
}
let Grades2 = [89, 96, 85, 90, 88];   // output: 89.6
make_avg(Grades2);
*/
// Using another formula:
function make_avg(Grades3) {
    console.log(Grades3.length);
    const sum = (total, number) => total + number;
    const ave3 = Grades3.reduce(sum) / Grades3.length;
    console.log(ave3);
}
let Grades3 = [89, 96, 85, 90, 108];   // output: 93.6
make_avg(Grades3);
















