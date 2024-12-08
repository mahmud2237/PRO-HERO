/**
 * How to get a number from an input field
 * 1. create a variable
 * 2. right side document.getElementById(id)
 * 3. .value
 * 4. parseFloat
*/

// console.log('add money loaded');
/* document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();

        console.log('add money button clicked');

        // getInputFieldValueById();
        // const addMoney = getInputFieldValueById();
        // console.log('add money value', addMoney);
        // const addMoney = document.getElementById('input-add-money').value;
        // const addMoneyNumber = parseFloat(addMoney);

        const addMoney = getInputFieldValueById('input-add-money');
        const pinNumber = getInputFieldValueById('input-pin-number');
        console.log('add money with parameter', addMoney, pinNumber)


    }); */
	
	
document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const addMoney = getInputFieldValueById('input-add-money');
        const pinNumber = getInputFieldValueById('input-pin-number');

        if(isNaN(addMoney)){
            alert('Failed to add money');
            return;
        }
        
        // wrong way to verify. do not try it at your serious website
        if(pinNumber === 1234){
            const balance = getTextFieldValueById('account-balance');
            const newBalance = balance + addMoney;

            document.getElementById('account-balance').innerText = newBalance;

            // add to transaction history
            const p = document.createElement('p');
            p.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance}`;
            console.log(p); 

            // should be a common function
            document.getElementById('transaction-container').appendChild(p);
        }
        else{
            alert('Failed to add the money.')
        }

    })