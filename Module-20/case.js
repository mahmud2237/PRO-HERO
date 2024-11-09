const school = 'RAJ UK UTTARA MODEL SCHOOL';
console.log(school);

// Use toLowerCase() or toUpperCase() to get the same input sometimes
const subject = 'Chemistry';
const book = 'chemistry';
if (subject.toLowerCase() === book.toLowerCase()){
    console.log('Subject and book are same.');
}else{
    console.log('Subject and book are not same.');
}

// Sometimes use trim for the unneccessary space on the string
const drink = ' water';
const liquid = '  water ';
if(drink.trim() === liquid.trim()){
    console.log('Drink and liquid are same.');
}else{
    console.log('Drink and liquid are not same.');
}


















