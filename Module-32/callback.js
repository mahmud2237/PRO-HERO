function greeting(person) {
    console.log(person);
}
// // const name = 'Halim mama';
// // const number = 45;
// // const number = [23, 34, 54];
// const number = {price: 45000, brand: 'Dell', memory: '8gb'};
// greeting(number);
function greetingNew(greetingHandler, name) {
    greetingHandler(name);
}
function greetingHandler(name) {
    console.log('Good Morning', name);
}
function greetEvening(name) {
    console.log('Good Evening', name);
}

greetingNew(greetingHandler, 'Tom Cina');
greetingNew(greetEvening, 'Tom Cina');
greetingNew(greetingHandler, 'Hunk Cina');
greetingNew(greetEvening, 'Hunk Cina');

/** 
    We will use it like below: 
    function submitHandler(){
        console.log('submit button clicked');
    }

    document.getElementById('submit-btn').addEventListener('click', submitHandler)
*/