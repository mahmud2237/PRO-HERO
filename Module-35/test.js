

function getTimeString(time){
    let hour = parseInt(time / 3600);
    let remainingSec = time % 3600;
    let min = parseInt(remainingSec / 60);
    remainingSec = remainingSec % 60;
    return `${hour} hours ${min} minutes and ${remainingSec} seconds ago`;
}
console.log(getTimeString(7503));

