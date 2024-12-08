// 
document.getElementById('delete-confirm').addEventListener('keyup', function(event){
    const text = event.target.value;
    const deleteButton = document.getElementById('btn-delete');
    if(text.toLowerCase() === 'delete'){
        deleteButton.disabled = false; // const deleteButton = document.removeAttribute('disabled');
    } else{
        deleteButton.disabled = true; // delete.setAttribute('disabled', true);
    }
})
document.getElementById('btn-delete').addEventListener('click', function(){
    const textField = document.getElementById('delete-confirm');
    if(textField.value.toLowerCase() === 'delete'){
        console.log('Deleted');
    }else{
        alert('Please try Again!');
        console.log('Not deleted!');
    }
})
