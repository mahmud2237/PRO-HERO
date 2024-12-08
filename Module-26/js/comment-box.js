// Step 1: add Event listener to the post button
document.getElementById('btn-post').addEventListener('click', function(){
    // step 2: get the comment inside the text area
    const commentBox = document.getElementById('new-comment');
    const newComment =commentBox.value;
    
    //step 3: now set the the comment inside the comment container
    // 1. get the comment container
    // 2. crate a new element (p tag)
    // 3. set the text content of the p tag to the new comment
    // 4. append the p tag to the comment container (inside the comment container)
    const commentContainer = document.getElementById('comment-container');
    const p = document.createElement('p');
    p.textContent = newComment; // p.innerText = newComment;
    commentContainer.appendChild(p);

    // step 4: clear the text inside the comment box
    commentBox.value = '';
})