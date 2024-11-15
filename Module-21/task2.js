function task2(num){
    if(num % 2 === 0){
        const ans = num / 2;
        return ans;
    }
    else{
        const ans = num * 2;
        return ans;
    }
}
console.log(task2(4));
console.log(task2(5));
