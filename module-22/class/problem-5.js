// Write a function which return total cost of the products in a shopping cart.

const shoppingCart = [
    {
        name: "Shoe",
        price: 3000,
        quantity: 1,
    },
    {
        name: "Shirt",
        price: 2000,
        quantity: 2,
    },
    {
        name: "Pant",
        price: 2500,
        quantity: 2,
    },
    {
        name: "Belt",
        price: 500,
        quantity: 1,
    },
];

function myFunction(productsArray) {
    let total = 0;
    for (let i = 0; i < productsArray.length; i++) {
        const product = productsArray[i];
        const productTotal = product.price * product.quantity;
        total += productTotal;
    }
    return total;
}

const expense = myFunction(shoppingCart);

console.log(expense);
