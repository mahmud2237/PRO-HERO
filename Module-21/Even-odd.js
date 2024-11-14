function evenOddCheck(a, b, c) {
    if (a % 2 === 0 && b % 2 === 0 && c % 2 === 0) {
        console.log(a, b, c, `are even`);
    } 
    else if (a % 2 !== 0 && b % 2 === 0 && c % 2 === 0) {
        console.log(a, `is even and`, b, c, `are odd`);
    }
    else if (a % 2 === 0 && b % 2 !== 0 && c % 2 === 0) {
        console.log(a, c ,`are even and`, b,`is odd`);
    }
    else if (a % 2 === 0 && b % 2 === 0 && c % 2 !== 0) {
        console.log(a, b ,`are even and`, c, `is odd`);
    }

    else {
        console.log(a, b, c, `are odd`);
    }

}
evenOddCheck(2, 3, 4);
evenOddCheck(3, 5, 7);