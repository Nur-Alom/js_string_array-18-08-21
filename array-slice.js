

const numbers = [12, 21, 34, 32, 41, 32, 54, 31, 31, 32, 41, 25,];
// slice.
// const numberSliced = numbers.slice(4, 8);
// console.log(numberSliced);
// console.log(numbers);

// splice to remove an element from an array.
// const numberSpliced = numbers.splice(4, 3);
// console.log(numberSpliced);
// console.log(numbers);


// 
const numbersSpliced2 = numbers.splice(4, 0, 777);
console.log(numbersSpliced2);
console.log(numbers);


