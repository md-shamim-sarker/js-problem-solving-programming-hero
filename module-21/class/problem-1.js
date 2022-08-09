// Write a program where two variables swap their values.

console.log('***** Process One *****');
{
    let x = 10;
    let y = 15;
    console.log(x, y);

    let z = x;
    x = y;
    y = z;
    console.log(x, y);
}
console.log('***** Process Two *****');
{
    let x = 20;
    let y = 25;
    console.log(x, y);

    [x, y] = [y, x]; // Destructuring
    console.log(x, y);
}
console.log('***** Process Three *****');
{
    let x = 30;
    let y = 35;
    console.log(x, y);

    x = x + y;
    y = x - y;
    x = x - y;
    console.log(x, y);
}
console.log('***** End *****');
