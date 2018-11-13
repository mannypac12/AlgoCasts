// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

    let len = str.length

    if (len % 2 !== 0) {
        return false
    } else {
        let frt_str = str.slice(0, len/2)
        let comp_str = str.slice(len)

        return frt_str.split('').reduce((acc, cur) => {return cur + acc}, '') === comp_str
    } 
    // if the string length is not even false
        // split the stiring half
        // if the reversed string of the first is the same as the second.
        // then true or not
}

module.exports = palindrome;
