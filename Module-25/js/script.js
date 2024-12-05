const allHeadings = document.getElementsByTagName('h1');
for(const h1 of allHeadings){
    console.log(h1.innerText);
}

const liCollection = document.getElementsByTagName('li');
// console.log(liCollection);
for(const li of liCollection){
    console.log(li.innerHTML);
}