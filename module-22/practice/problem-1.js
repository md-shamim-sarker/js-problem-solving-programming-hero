// Write a function which take three sides of a triangle as parameter and return area of that triangle.

function myFunction(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        const s = (a + b + c) / 2; // Half-Perimeter
        const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        console.log(area.toFixed(2), 'Square Units');
    } else {
        console.log('Side length is not valid.');
    }
}

myFunction(5, 5, 9);

/*
9.81 Square Units
*/
