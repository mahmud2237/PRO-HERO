const menuBtn = document.getElementById('menu-btn');
const mobileMenuEl = document.getElementById('mobileMenu');

//Menu icons
menuBtn.addEventListener('click', function(){
    menuBtn.children[0].classList.toggle('hidden');
    const menuCloseBtn = document.getElementById('close-icon');
    menuCloseBtn.classList.toggle('hidden');
    mobileMenuEl.classList.toggle('show');
    mobileMenuEl.classList.toggle('flex');

});

// // Close menu when clicked on close icon
// menuBtn.addEventListener('click', () => {
//     mobileMenuEl.classList.toggle('show');
// });

// // Close menu when clicked outside

// window.addEventListener('click', (e) => {
//     if (e.target !== menuBtn && e.target !== mobileMenuEl) {
//         mobileMenuEl.classList.remove('show');
//     }
// });

// // Smooth scrolling

// const links = document.querySelectorAll('.menu-item a');

// links.forEach((link) => {
//     link.addEventListener('click', (e) => {
//         e.preventDefault();

//         const href = link.getAttribute('href');
//         const targetElement = document.querySelector(href);

//         targetElement.scrollIntoView({
//             behavior: 'smooth',
//         });
//     });
// });