// make input field focus and blur
document.getElementById('text-field').addEventListener('focus', function(){
    console.log('Text Field Got Focus');
})
document.getElementById('text-field').addEventListener('blur', function(){
    console.log('Text Field Got Blur');
})
// Add event listener to button
document.getElementById('btn-more').addEventListener('mousemove', function(){
    console.log('Event Triggered');
})