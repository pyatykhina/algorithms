function selectionSort(array) {

    for (let i = 0; i < array.length; i++) {

        let min = array[i];
        let indexMin = i;

        for(let j = i+1; j < array.length; j++) {
            if(array[j] < min) {
                min = array[j];
                indexMin = j;
            }
        }

        let tmp = array[i];
        array[i] = min;
        array[indexMin] = tmp;
    }

    return array;
}

console.log('selectionSort([3, 5, 6, 0, 9, 1, 4])', selectionSort([3, 5, 6, 0, 9, 1, 4]))
