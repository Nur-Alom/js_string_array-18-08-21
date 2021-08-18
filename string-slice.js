

const anthem = 'Amer Sonar Bangla Ami Tomai Valobasi';
const words = anthem.split(' ');
const withOutA = anthem.split('a');
console.log(withOutA);

// slice.
const smallSlice = anthem.slice(5, 13);
// console.log(smallSlice);

// substr.

const anotherPart = anthem.substr(11, 10);
// console.log(anotherPart);

const againAnotherPart = anthem.substring(11, 15);
// console.log(againAnotherPart);

// concat

const first = 'Amader';
const second = 'city';
// const fullString = first + ' ' + second;
const fullString = first.concat(second).concat('abc')
console.log(fullString);

// 
const words2 = ['alim', 'badhone', 'comrade', 'davide'];
const allJoined = words2.join(' ');
console.log(allJoined);



