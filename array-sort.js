
const numbers = [4, 2, 5, 6, 8, 9, 7, 1, 4, 5];
const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);

const friends = ['korim', 'rohim', 'faruk', 'mahim', 'maidul'];
// const sortedFriends = friends.sort();
// console.log(sortedFriends);
// const reversedFriends = friends.reverse();
// console.log(reversedFriends);

// const sortedReversedFriends = friends.sort().reverse();
// console.log(sortedReversedFriends);

// number sorting fun.
const bigNumbers = [66, 58, 81, 92, 9, 6, 37, 13, 2];
const sortedBigNumbers = bigNumbers.sort(function (a, b) {
    return a - b;
});
console.log(sortedBigNumbers);

