// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    let obj = {}
    str.split('').forEach(el => {
        if (Object.keys(obj).includes(el)) {
            obj[el]++
        } else {
            obj[el]=1
        } 
    })

    return Object.keys(obj).reduce((acc, cur) => { return obj[cur] > acc ? cur:acc})

}

module.exports = maxChar;
