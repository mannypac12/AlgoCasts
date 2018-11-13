// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

    let ans = ''
    for (let st of n.toString()) {
        if (st === '-') {
        } else {
            ans = st + ans
        }
    } 
    return n >= 0 ? parseInt(ans):parseInt(`-${ans}`)
}

module.exports = reverseInt;
