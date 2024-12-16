// fetch('https://jsonplaceholder.typicode.com/todos/1') // here fetch call the API url()
//     // .then(response => console.log(response));
//     .then(response => response.json())  //.json isn't similar but close to JSON.parse
//     .then(json => console.log(json))

// same thing we will write by our own is below:
// const url = 'https://jsonplaceholder.typicode.com/todos/1';
// fetch(url)
// .then(response => response.json())
// .then(json => console.log(json))

function loadData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
}

