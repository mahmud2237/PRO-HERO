const college = {
    name: 'vnc',
    class: ['10', '11', '12'],
    events: ['science fair', 'bijoy dibos', '21 Feb'],
    unique: {
        color: 'blue',

    }
}
console.log(college);
delete college.events;
console.log('After delete the events: ', college);