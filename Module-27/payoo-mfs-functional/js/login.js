
//console.log('button clicking file added);
// document.getElementById('id').addEventListener('click', function(){})
/*
//step 1: set event handler
document.getElementById('button-login').addEventListener('click', function(event){
        // step 2: prevent default behavior (prevent reloading browser)
        event.preventDefault(); // <-- Use for input field always to prevent auto refresh by css
        console.log('login button clicked');

        // step 3: get phone number and pin
        const phoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pin-number').value;
        console.log('phone number:', phoneNumber, 'pin number:', pinNumber);
        //step 4: validate phone and pin
        // this is temporary. You shouldn't do like this. Later we will know the best process to validate.
        if(phoneNumber === '5' && pinNumber === '1234'){
            console.log('you are logged in');
            window.location.href = './home.html';
        }else{
            alert('Wrong phone number or pin');
        }
})
*/





document.getElementById('button-login').addEventListener('click', function (event) {
    event.preventDefault();
    // get phone number and pin
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber);

    // bad way to validate
    if (phoneNumber === '017259' && pinNumber === '1234') {
        console.log('you are logged in');
        window.location.href = './home.html';
    } else {
        alert('Wrong phone number or pin');
    }

})






