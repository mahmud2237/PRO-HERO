// print 0 1 2 3 4 6 8 9  only skip 5 and 7
let x = 0;
let count = ""; 
while(x < 10){
    count += x + " "; //using for inline print
    x++;
    if(x == 5 || x == 7){
        x++;
        continue;
    }
}

console.log(count);