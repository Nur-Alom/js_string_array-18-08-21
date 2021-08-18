function megaFriends(friends) {
    if (Array.isArray(friends) == false) {
        return 'please input a valid name!!';
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}

const friends = ['korim', 'rohim', 'kuddus', 'ashrafull', 'mahidul']
const myBigBuddy = megaFriends(54154);
// console.log(myBigBuddy);


if (friends.indexOf('rohim') != -1) {
    // console.log('rohim asee');
}

// includes.
if (friends.includes('rohim')) {
    // console.log('rohim asee');
}

// concat
const first = [1, 2, 3, 4];
const second = [5, 6, 7, 8, 9];

const combined = first.concat(second);

console.log(combined);



