
// const items = document.getElementsByClassName('item');
// for(const item of items){
//     item.addEventListener('click', function(event){
//         // console.log(event.target.parentNode);
//         event.target.parentNode.removeChild(event.target);
//     })
// }
// befor the code isn't working for new ul child so we need to work on the parent ul part
const ulParent = document.getElementById('list-container');
ulParent.addEventListener('click', function (event) {
    // console.log(event.target.parentNode);
    event.target.parentNode.removeChild(event.target);
})

document.getElementById('btn-add-item').addEventListener('click', function () {
    const listContainer = document.getElementById('list-container');

    const li = document.createElement('li');
    li.textContent = 'New Item Added'; // li.innerText = 'New item Added';
    li.classList.add('item');
    listContainer.appendChild(li);
})