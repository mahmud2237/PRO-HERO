// same thing doing by 4 examples

// 1. Fetch API
function loadUserFetch(){
    fetch('https://jsonplaceholder.typicode.com/users')
       .then(res => res.json())
       .then(data => console.log(data))
       .catch(err => console.log(err))
}

// 2. Async/Await
async function loadUserAsyncAwait(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}

// 3. Arrow Async
const loadUserArrowAsync = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}

// 4. Async Try-Catch
const loadUserAsyncTryCatch = async() =>{
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}



