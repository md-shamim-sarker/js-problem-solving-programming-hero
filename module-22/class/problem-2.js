// Write a function which take two numbers a and b as parameter. Show the numbers a to b, if the number is divisible by 3 then instead of the number, show 'foo', if the number is divisible by 5 then instead of the number, show 'bar' and finally if the number is divisible by both 3 and 5 then instead of the number, show 'foobar'.

function myFunction(a, b) {
    for (let i = a; i <= b; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('foobar');
        } else if (i % 3 === 0) {
            console.log('foo');
        } else if (i % 5 === 0) {
            console.log('bar');
        } else {
            console.log(i);
        }
    }
}

const start = 1;
const end = 20;
myFunction(start, end);

/*
1
2
foo
4
bar
foo
7
8
foo
bar
11
foo
13
14
foobar
16
17
foo
19
bar
*/
