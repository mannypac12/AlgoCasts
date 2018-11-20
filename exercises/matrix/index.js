// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
// 00 01 02 12 22 
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
// 00 01 02 03 13 23 33 32 31 30 20 10 11 12 22 21


function matrix(n) {

    const results = [];
    for (let i = 0; i < n; i++) {
        results.push([]);
        console.log(results)
    }
    
    let counter = 1;
    let startColumn = 0;
    let endColumn = n-1;
    let startRow = 0;
    let endRow = n-1;

    while (startColumn <= endColumn && startRow <= endRow) {
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter;
            counter++;
        }
        startRow++;

        for (let i = startRow; i<= endRow; i++) {
            results[i][endColumn] = counter;
            counter++ 
        }
        endColumn--;

        for (let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter;
            counter++
        }
        startColumn++;
    }

    return results
    // n nested Array
    // n elements for each nested array
    // elements should be incremented
}

console.log(matrix(4))

module.exports = matrix;
