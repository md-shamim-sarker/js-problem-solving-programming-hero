// Write a function to check a number prime or not.

function isPrime(num) {
    if (num === 1) {
        console.log('1 is not prime or composite number.');
    } else if (num > 1) {
        newNum = Math.sqrt(num);
        for (let i = 2; i < newNum; i++) {
            if (num % i === 0) {
                console.log(num, 'is not prime number.');
                break;
            } else {
                console.log(num, 'is prime number.');
                break;
            }
        }
    } else {
        console.log(num, 'is not prime number.');
    }
}

const num = 1013;
isPrime(num);

/*
1013 is prime number.
*/
