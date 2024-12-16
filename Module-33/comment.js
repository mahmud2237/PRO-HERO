const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error happened:', error))
}

// we can do the upper code like below for the best output with await
const loadComments2 = async () => {  // bcause we can only use await on async function
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await res.json();
        console.log(data);
    }
    catch(error) {
        console.error('Error happened:', error);
    }
}



