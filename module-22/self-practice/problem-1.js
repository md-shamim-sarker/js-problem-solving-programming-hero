// Write a function to print all the prime numbers in a given range.

function primeNumber(num1, num2) {
    for (let i = num1; i <= num2; i++) {
        let flag = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        if (i > 1 && flag == 0) {
            console.log(i);
        }
    }
}

primeNumber(10, 20);

/*
11
13
17
19
*/
