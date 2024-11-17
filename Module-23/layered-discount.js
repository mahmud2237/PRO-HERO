/**
 * first 100 ---> 100
 * 101 to 200 ---> 90
 * above 200 ---> 70
 */

function layeredDiscountedTotal (quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quantity <= 100){
        const total = quantity * first100Price;
        return total;
    }
    else if(quantity <= 200){
        const firstTotal = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        const secondTotal = remainingQuantity * second100Price;
        const total = firstTotal + secondTotal;
        return total;
    }else{
        const firstTotal = 100 * first100Price;
        const secondTotal = 100 * second100Price;
        const remainingQuantity = quantity - 200;
        const aboveTotal = remainingQuantity * above200Price;
        const total = first100Price + second100Price + above200Price;
        return total;
    }

}
const totalPrice = layeredDiscountedTotal(300);
console.log(totalPrice); // Output: 2100












