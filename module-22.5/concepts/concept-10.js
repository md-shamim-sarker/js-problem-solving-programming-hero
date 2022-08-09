// Write a program to print all elements greater than 80 from an array.

const array = [50, 60, 85, 75, 95, 90, 70, 68];

array.forEach((element) => {
    if (element > 80) {
        console.log(element);
    }
});
