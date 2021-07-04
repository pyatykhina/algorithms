function insertionSort(array) {

    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let j = i;

        while (j > 0 && array[j-1] > current) {
            array[j] = array[j-1];
            j--;
        }

        array[j] = current;
    }

    return array;
}

console.log('insertionSort([3, 5, 6, 0, 9, 1, 4])', insertionSort([3, 5, 6, 0, 9, 1, 4]))
