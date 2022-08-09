// Write a program to print odd numbers between 7 to 20.

function oddNumber(n1, n2) {
    for (let i = n1; i <= n2; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

oddNumber(7, 19);
