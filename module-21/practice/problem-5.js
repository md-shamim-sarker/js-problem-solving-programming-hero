// Write a function which return the second largest element of an array. (Tricky)

function secondLargest(array) {
    const newArr = array.sort(function (a, b) {
        return b - a;
    });

    return newArr[1];
}

const arr = [40, 100, 1, 5, 25, 10, 80];
console.log(secondLargest(arr));

/*
80
*/
