

const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;

    // if id and value both are truthy than it will store in localstorage
    if(id && value){
        localStorage.setItem(id, value);
    };
    idInput.value = '';
    valueInput.value = '';
}





