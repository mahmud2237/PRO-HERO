function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}
/**
 1. get the container clement where you want to add the new elements
 2. create child element
 3. set innerText or innerHTML
 4. append child to the parent container
*/
function displayPosts(posts) {
    const postsContainer = document.getElementById('posts-container');
    for (const post of posts) {
        console.log(post);
        const divPost = document.createElement('div');
        divPost.classList.add('post');
        divPost.innerHTML = `
            <h4>User - ${post.id} </h4>
            <h5>Post: ${post.title}</h5>
            <p>Description: ${post.body}</p>
        `;
        postsContainer.appendChild(divPost);
    }
}

loadPosts(); // called the function

