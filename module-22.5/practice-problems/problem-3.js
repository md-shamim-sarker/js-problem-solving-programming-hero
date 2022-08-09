// Write a function having three integer parameters. 1st parameter is first books copies, 2nd parameter is second books copies and 3rd parameter is third books copies.
// The required pages of the first book is 100.
// The required pages of the second book is 200.
// The required pages of the third book is 300.
// Return total required pages.

function paperRequirements(firstBook, secondBook, thirdBook) {
    const firstBookPages = firstBook * 100;
    const secondBookPages = secondBook * 200;
    const thirdBookPages = thirdBook * 300;
    const totalPages = firstBookPages + secondBookPages + thirdBookPages;
    return totalPages;
}

console.log(paperRequirements(5, 2, 3));
