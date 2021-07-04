function primes(n) {
    let result = [];

    for (let i = 1; i <= n; i++) {
        let flag = false;

        result.forEach(prime => {
            if (prime !== 1 && i % prime === 0) {
                flag = true;
            } 
        })

        if (flag === false) result.push(i);
    }

    return result;
}

console.log('primes(10)', primes(10))
