// Write a function named bestFriend which take an array as a parameter and return the longest name as a string.

function bestFriend(array) {
    let myBestFriend = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > myBestFriend.length) {
            myBestFriend = array[i];
        }
    }
    return myBestFriend;
}

const arr = ['Shamim Sarker', 'Snigdha', 'Sneha', 'Mony'];
console.log(bestFriend(arr));
