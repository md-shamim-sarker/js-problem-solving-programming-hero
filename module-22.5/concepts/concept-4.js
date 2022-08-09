// Explore comparison operator using two variables.
{
    function comparisonFunc(x, y) {
        if (x > y) {
            console.log(x, 'is greater than', y);
        } else {
            console.log(x, 'is less than', y);
        }
    }
    comparisonFunc(10, 55);
}

{
    function comparisonFunc(x, y) {
        if (x === y) {
            console.log(x, 'is equal to', y);
        } else {
            console.log(x, 'is not equal to', y);
        }
    }
    comparisonFunc(10, 55);
}

{
    function comparisonFunc(x, y) {
        if (x >= y) {
            console.log(x, 'is greater or equal to', y);
        } else {
            console.log(x, 'is less than or equal to', y);
        }
    }
    comparisonFunc(10, 55);
}
