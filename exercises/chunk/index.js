// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    
    // size >= array.length then return array itself


    // nested array => Math.floor(array.length / size)
    // Max subarray length <= Math.floor(array.length / size)
        const sub = []
        let index = 0;

        while (index < array.length) {
            sub.push(array.slice(index, index+size))
            index += size;
        }

        return sub
        // let sub = []
        // array.forEach(el => {
        //     if (sub.length < size) {
        //         sub.push(el)
        //     } else {
        //         ans.push(sub)
        //         sub = []
        //         sub.push(el)
        //     } 
        // })
        // ans.push(sub)
        // return ans
};


module.exports = chunk;
