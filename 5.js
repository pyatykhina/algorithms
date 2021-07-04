function primes(n) {
    let result = [];

    for (let i = 1; i <= n; i++) {
        let j = 2;
        let flag = false;

        while (j < i) {

            if (i % j === 0) {
                flag = true;
                break;
            }
            j++;
        }

        if (flag === false) result.push(i);
    }

    return result;
}

console.log('primes(10)', primes(10))
