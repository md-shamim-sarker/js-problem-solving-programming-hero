// Write a function which can remove duplicate elements from an array

function removeDuplicate(names) {
    const uniqueNames = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (uniqueNames.includes(name) === false) {
            uniqueNames.push(name);
        }
    }
    return uniqueNames;
}

const names = ["Shamim", "Snigdha", "Sneha", "Shamim", "Sneha"];

console.log(removeDuplicate(names));
