// Write a function which return the cheapest phone details from object.

const phones = [
    {
        name: "Samsung",
        camera: 12,
        storage: "32gb",
        price: 36000,
        color: "Silver",
    },
    {
        name: "Walton",
        camera: 10,
        storage: "24gb",
        price: 22000,
        color: "Golden",
    },
    {
        name: "iPhone",
        camera: 7,
        storage: "16gb",
        price: 60000,
        color: "White",
    },
    {
        name: "Oppo",
        camera: 13,
        storage: "28gb",
        price: 40000,
        color: "Purple",
    },
    {
        name: "Xiomi",
        camera: 20,
        storage: "25gb",
        price: 18000,
        color: "White",
    },
];

function myFunction(obj) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const myPhone = myFunction(phones);
console.log(myPhone);
