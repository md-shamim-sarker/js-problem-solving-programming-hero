// Using loop to print all elements of an array

const array = [10, 12, 11, 15, 14];

console.log('***** for loop *****');
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
}

console.log('***** forEach loop *****');
array.forEach((element) => {
    console.log(element);
});

console.log('***** for in loop *****');
for (const i in array) {
    const element = array[i];
    console.log(element);
}

console.log('***** for of loop *****');
for (const iterator of array) {
    console.log(iterator);
}

console.log('***** while loop *****');
let i = 0;
while (i < array.length) {
    console.log(array[i]);
    i++;
}

console.log('***** do while loop *****');
let j = 0;
do {
    console.log(array[j]);
    j++;
} while (j < array.length);
console.log('***** end *****');
