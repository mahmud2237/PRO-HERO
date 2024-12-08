// option 2: add onclick function
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// option 3: change color by using id
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

// option 4: another same thing using id
const greenButton = document.getElementById('make-green');
greenButton.onclick = function makeGreen(){
    document.body.style.backgroundColor = 'green';
}
// option 5: we will use addEventListener on our every projects
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', function(){
    document.body.style.backgroundColor = 'pink';
})
// option 5 another: addEventListener example
const purpleButton = document.getElementById('make-purple');
purpleButton.addEventListener('click', makePurple);
function makePurple(){
    document.body.style.backgroundColor = 'purple';
}
// option 5 another: We will use this example Sometimes
document.getElementById('make-goldenRod').addEventListener('click', function makeGoldenRod(){
    document.body.style.backgroundColor = 'tomato';
});


