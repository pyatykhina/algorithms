function maxSubArray(array) {
    let currSum = 0;
    let maxSum = 0;

    for (let i = 0; i < array.length; i++) {
        currSum += array[i];
        maxSum = Math.max(maxSum, currSum);
        if (currSum < 0) currSum = 0;
    }

    return maxSum;
}

console.log('maxSubArray([1, -2, 3, 4, -9, 6])', maxSubArray([1, -2, 3, 4, -9, 6]))
