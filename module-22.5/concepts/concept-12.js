// Declare an object having three properties and any of three properties have to change.

const object = {
    brand: 'Nokia',
    model: '1200',
    camera: 'no',
    price: 7000,
    color: 'silver',
};

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(key, element);
    }
}
console.log('**** Divider *****');
object.price = 8000;

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(key, element);
    }
}
