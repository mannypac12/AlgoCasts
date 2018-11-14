// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {

    function cap(el) {
        let ans = el.split('')
        ans[0] = ans[0].toUpperCase()
        return ans.join('')
    }

    return str
            .split(' ')
            .map(el => cap(el))
            .join(' ')
}

module.exports = capitalize;
