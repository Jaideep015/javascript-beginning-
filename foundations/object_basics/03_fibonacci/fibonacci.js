const fibonacci = function(n) {
    if ((n < 0) || (typeof(n) !== 'number') || Number.isNaN(n)) {
        return 'OOPS'
    } else if (n === 0) {
        return 0
    } else {
        let fibo = [1,1]
        for (let i = 2; i <= n; i++) {
            let current = fibo[i-2] + fibo[i-1]
            fibo.push(current)
        }
        return fibo[n-1]
    }
};


// Do not edit below this line
module.exports = fibonacci;
