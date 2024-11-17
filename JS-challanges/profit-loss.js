/**
 * write a program that will contain two parameters called totalEarningMoney and costMoney. 
 * input: 100 80        Output: Profit
 * input: 100 120       Output: Loss
 * input: 100 100       Output: Break-even
 */
function profitOrLoss(totalEarningMoney, costMoney){
    if(totalEarningMoney > costMoney){
        return "Profit";
    }else if(totalEarningMoney < costMoney){
        return "Loss";
    }else{
        return "Break-even";
    }
}

console.log(profitOrLoss(100, 80)); // Output: Profit









