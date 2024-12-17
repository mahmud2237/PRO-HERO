
console.log(1);
console.log(2);
doSomething();
// fetching don't follow sequance...
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

setTimeout(doSomething, 4000);
console.log(4);
console.log(5);
setTimeout(() => {
    console.log('lazy logged');
}, 3000);
console.log(6);



function doSomething(){
    console.log(3);
}
