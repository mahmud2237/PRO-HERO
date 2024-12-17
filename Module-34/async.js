
const myLoader = () => {
    return new Promise((resolve, reject) => {
        const success = Math.random();
        if (success <= 0.5) {
            resolve(success);
        } else {
            reject(success);
        }
    })
}

myLoader()
    .then(data => console.log('resolved data', data))
    .then(err => console.log('rejected with value', err))

// it's like the fetch we did before
fetch('')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

// we can write this fetch script also like below with the help of async
async function loadData() {
    const res = await fetch('');
    const data = await res.json();
    console.log(data);
    return data;
}
loadData();
// can do that using arrow function
const loadData2 = async () => {
    const res = await fetch('');
    const data = await res.json();
    console.log(data);
    return data;
}
loadData2();



















