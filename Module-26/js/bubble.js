
document.getElementById('item-2').addEventListener('click', function(event){
    console.log('Item-2 clicked');
    event.stopPropagation();
})

document.getElementById('list-ul').addEventListener('click', function(event){
    console.log('ul List clicked');
    // event.stopPropagation();
})
document.getElementById('section-ul-list-container').addEventListener('click', function(evente){
    console.log('Section container clicked');
})
document.getElementById('body').addEventListener('click', function(event){
    console.log('Body of the HTML clicked');
})

