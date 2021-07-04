function bubbleSort(array) {
    for(let i = 0; i < array.length-1; i++) {
        for (let j = i; j< array.length; j++) {
            if (array[i] > array[j]) {
                let tmp = array[i];
                array[i] = array[j];
                array[j] = tmp;
            }
        }
    }
    return array;
}

console.log('bubbleSort([3, 5, 6, 0, 9, 1, 4])', bubbleSort([3, 5, 6, 0, 9, 1, 4]))
