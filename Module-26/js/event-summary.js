function handleOnClick(){
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Handled by function attached on onclick attribute';
}

document.getElementById('event-listener').addEventListener('click', function(){
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Handled by event listener';
})

document.getElementById('btn-update').addEventListener('click', function(){
    const inputField = document.getElementById('input-text');
    // console.log(inputText.value);
    const inputTextValue = inputField.value;

    const p = document.getElementById('input-display');
    p.innerText = inputTextValue;
    inputField.value = '';
})