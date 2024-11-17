/**
 * chair --> 300 tk
 * table --> 900 tk
 * bed --> 2000 tk
 */

function getWoodQuantity(chairQuantity, tablequantity, bedQuantity){
    const woodPerChair = 300;
    const woodPerTable = 900;
    const woodPerBed = 2000;

    const totalWoodForChairs = chairQuantity * woodPerChair;
    const totalWoodForTable = tablequantity * woodPerTable;
    const totalWoodForBed = bedQuantity * woodPerBed;

    const totalWoodQuantity = totalWoodForChairs + totalWoodForTable + totalWoodForBed;
    return totalWoodQuantity;
}
const totalPrice = getWoodQuantity(1, 1, 1);
console.log(`Total price will be: ${totalPrice} taka.` );










