function binarySearch(array, n) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let middle = Math.floor((right - left) / 2) + left;

        if (array[middle] === n) {
            return middle;
        } else if (array[middle] < n) {
            left = middle+1;
        } else if (array[middle] > n) {
            right = middle-1;
        }
    }

    return -1;
}

console.log('binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)', binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
console.log('binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)', binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9))
console.log('binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1)', binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1))
