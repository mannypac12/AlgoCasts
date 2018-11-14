// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    // while loop n
    // use repeat and + string plus => length should be the same.
    
    let i = 0
    while (i < n) {
        let ans = `${'#'.repeat(i+1)}`+ `${' '.repeat(n-i-1)}`
        console.log(ans)
        i++
    }

}


module.exports = steps;
