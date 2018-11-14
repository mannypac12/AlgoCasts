// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    
    // length 

    let i = 0

    // if (n === 1) {
    //     console.log('#') 
    // } else {
    let pyr_base = 2*n-1
        while (i < n) {
            i++
            let div = (pyr_base-2*i+1) / 2
            let ans = `${' '.repeat(div)}` + `${'#'.repeat(2*i-1)}` + `${' '.repeat(div)}`
            console.log(ans)

         }
}
pyramid(1)

module.exports = pyramid;
