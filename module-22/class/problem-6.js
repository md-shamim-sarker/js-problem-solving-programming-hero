// If ticket numbers are less than 100 then per ticket price is 100 taka. If ticket numbers are more than 100 but less than 200 then first 100 tickets price will be 100 taka per piece and rest tickets will be 90 taka per piece. Again if ticket numbers are more than 200 then first 100 tickets price will be 100 taka per piece, second 100 tickets price will be 90 taka per piece and rest tickets will be 70 taka per piece. Now write a program to calculate this problem.

function myFunction(ticketQuantity) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;

    if (ticketQuantity <= 100) {
        const price = ticketQuantity * first100Rate;
        return price;
    } else if (ticketQuantity <= 200) {
        const first100Price = 100 * first100Rate;
        const restTicketPrice = (ticketQuantity - 100) * second100Rate;
        const price = first100Price + restTicketPrice;
        return price;
    } else {
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketPrice = (ticketQuantity - 200) * restTicketRate;
        const price = first100Price + second100Price + restTicketPrice;
        return price;
    }
}

const price = myFunction(120);
console.log("Total Expense:", price);
