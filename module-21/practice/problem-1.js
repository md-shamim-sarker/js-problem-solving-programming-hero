// Write a function which can return the smallest element from an array.

function findSmall(array) {
    let smallNumber = array[0];

    for (let i = 0; i < array.length; i++) {
        if (smallNumber > array[i]) {
            smallNumber = array[i];
        }
    }
    return smallNumber;
}

const arr = [12, 14, 15, 10, 56, 5];

console.log(findSmall(arr));

/*
5
*/
