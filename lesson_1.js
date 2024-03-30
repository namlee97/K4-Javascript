function getRandomValue(min, max) {
    return Math.floor(Math.random()*(max-min+1)) + min;
}
const min = 1;
const max = 20
console.log(`Gia tri ngau nhien trong khoang [${min},${max}]: ${getRandomValue(min,max)}`);