// Write a program which return all positive numbers from an array as array. But when a negative value appeared the loop will stop immediately.

function arrayFunc(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element > 0) {
            newArray.push(element);
        } else {
            break;
        }
    }
    return newArray;
}

const numbers = [10, 15, 12, 14, -23, 24];

console.log(arrayFunc(numbers));
