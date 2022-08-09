// Write a program to print Fibonacci series.

function fiboFunction(num) {
    const fiboSeries = [0, 1];
    for (let i = 2; i <= num; i++) {
        fiboSeries[i] = fiboSeries[i - 1] + fiboSeries[i - 2];
    }
    console.log(fiboSeries);
}

fiboFunction(6);

/*
[
  0, 1, 1, 2,
  3, 5, 8
]
*/
