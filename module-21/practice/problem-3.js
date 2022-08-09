// Write a function which return the average of all elements in an array.

function avgFunc(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    let avg = sum / array.length;
    return avg;
}

const arr = [1, 3, 5, 7, 9];
console.log(avgFunc(arr));

/*
5
*/
