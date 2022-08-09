// Explore logical operator using two variables.

const level = 11;
const quality = 'good';

if (level === 10 && quality === 'good') {
    console.log('Your are brilliant.');
} else if (level === 10 || quality === 'good') {
    console.log('You are average.');
} else {
    console.log('Input is not clear.');
}
