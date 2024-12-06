// using getElementsByTagName
// const allHeadings = document.getElementsByTagName('h1');
// for(const h1 of allHeadings){
//     console.log(h1.innerText);
// }

// const liCollection = document.getElementsByTagName('li');
// // console.log(liCollection);
// for(const li of liCollection){
//     console.log(li.innerHTML);
// }

// using getElementById
const fruitsTitle = document.getElementById('fruits-title');
fruitsTitle.innerText = 'Fruits Title changed by JS';

fruitsTitle.style.backgroundColor = 'yellow';

// using getElementsByClassName
const placesName = document.getElementsByClassName('important-places');
for(const place of placesName){
    console.log(place.innerHTML);
}

//using querySelectorAll
const fruitLi = document.querySelectorAll('.fruits-container li');
// console.log(fruitLi);
for(const li of fruitLi){
    console.log(li.innerText);
}

//using querySelector
const placeLi = document.querySelector('.important-places');
console.log(placeLi.innerText);


