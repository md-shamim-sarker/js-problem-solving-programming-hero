// Suppose a chair need to 3 cft wood, a table need to 10 cft wood and a bed need to 50 cft wood. Write a function which take three quantity as arguments and return total cft of wood.

function myFunction(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;

    const totalWood = chairWood + tableWood + bedWood;

    return totalWood;
}

const totalWood = myFunction(6, 1, 2);
console.log('Total Wood Needed:', totalWood, 'cft.');

/*
Total Wood Needed: 128 cft.
*/
