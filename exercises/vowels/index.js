// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let i = 0
    str
        .toLowerCase()
        .split('')
        .forEach(el => {
        if (el === 'a' || el === 'e' || el === 'i' || el === 'o' || el === 'u') {
            i++
        }
    })
    return i
}

console.log(vowels('Hi There!'))
console.log(vowels('Why do you ask?'))

// new function
// object containing keys, aieou, starts false, if exists, true, if not false
// then sum

module.exports = vowels;
