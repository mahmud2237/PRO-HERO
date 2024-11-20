/***
 * There will be given some information like name, birthyear and sitename. Make a strong password to using
 * those given info. 
 * input: {name: 'rahat', birthYear: 2002, siteName: "Facebook"}         Output: Facebook#rahat@2002
 * input: {name: 'kolimoddin', birthYear: 1999, siteName: 'google'}      Output: Google#kolimoddin@1999
 * input: {name: 'toky', birthYear: 200, siteName: "Facebook"}           Output: invalid
 * input: {name: 'maisha' birthYear: 2002}                               Output: invalid
 * Challange: If any info is missing from these above info or if birthYear isn't given 4 digit than these 
 * function will return a string value which is 'invalid'.   
 */
function password(obj) {
    if (obj.name === undefined || obj.birthYear === undefined || obj.siteName === undefined || 
        obj.birthYear.toString().length !== 4) {
        return 'Invalid';
    }

    let capitalSiteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
    let passWordStr = capitalSiteName + '#' + obj.name + '@' + obj.birthYear;
    return passWordStr;
}
console.log(password({ name: 'kolimoddin', birthYear: 1999, siteName: 'google' }));
console.log(password({ name: 'rahat', birthYear: 2002, siteName: 'Facebook' }));
console.log(password({ name: 'toky', birthYear: 200, siteName: 'Facebook' }));
console.log(password({ name: 'maisha', birthYear: 2002 }));



