function loadUsers2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers2(data))
}

function displayUsers2(users){
    const ul = document.getElementById('users-list');
    for(const user of users){
        // console.log(user);
        // console.log(`${user.id}. ${user.name}, His email is: ${user.email} and his userName is: ${user.username}`);
        const li = document.createElement('li');
        const text = `${user.id}. ${user.name}, His email is: ${user.email} and his userName is: ${user.username}`;
        li.innerText = text;
        ul.appendChild(li);
    }
}






