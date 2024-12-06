const placesContainer = document.getElementById('places-container');
placesContainer.classList.remove('large-text');
placesContainer.classList.add('text-center');

// to append some tags
const placesUl = document.querySelector('#places-container ul');
const li = document.createElement('li');
li.innerText = 'ShopnoPuri';
placesUl.append(li);


//add new section with h1 in main tag
const main = document.querySelector('#main-container');

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'Welcome to our site!';
section.appendChild(h1);
const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Welcome';
const li2 = document.createElement('li');
li2.innerText = 'Thank You';
ul.appendChild(li1);
ul.appendChild(li2);
section.appendChild(ul);

main.appendChild(section);
// or we can add this upper codes through innerHTML
const sectionGreet = document.createElement('section');
sectionGreet.innerHTML = `
<h1>Hey! Welcome Everyone</h1>
<ul>
    <li>Welcome</li>
    <li>Thank You</li>
    <li>Goodbye</li>
</ul>
`;
main.appendChild(sectionGreet);

// hide footer h1 part
const footerH1hide = document.querySelector('footer h1');
footerH1hide.style.display = 'none';
