
function checkAge(){
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');

    try{
        // console.log(bBaria); // as this bBaria variable isn't defined
        const age = parseInt(ageText);
        if(isNaN(age)){
            // console.log('Age not found', age, ageText);
            throw('Age not found');
        }else if(age < 18){
            throw('You are not eligible to vote');
        }else if(age > 35){
            throw("Murubbi Murubbi apnar vot pore!");
            
        }

        errorTag.innerHTML = '';
    }catch(err){
        console.log('ERROR: ', err);
        // errorTag.innerText = err.message;
        // errorTag.innerHTML = 'Error Or Something wrong';
        errorTag.innerHTML = 'Error:' + err;
    }
    finally{
        console.log('All done inside try and catch');
    }
    console.log(99999);
}








