
let calcMap = {
    "1": 0,
    "2": 0,
    "3": 0
}
// Recursive
function fibonacci(n, stepCounter= 0) {
    calcMap["1"]++
    if (n < 2) {
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}


// Simple for
function fibonacci1(n) {
    let result = [0,1];
    for (let i = 1; i< n; i++) {
        calcMap["2"]++
        result.push(result[i] + result[i-1]);
    }
    return result[n]
}


// Recursive + DP
function fibonacciMaster() {
    let cache = {}
    return function fib (n) {
        calcMap["3"]++
        if (n in cache) {
            return cache[n];
        } else {
            if (n < 2) {
                return n;
            } else {
                cache[n] = fib(n-1) + fib(n-2);
                return cache[n];
            }
        }

    }
}

let fibonacci2 = fibonacciMaster();

[ fibonacci, fibonacci1, fibonacci2].forEach((fn,i) => {
    console.time(`${i+1}`);
    console.log(i+1, fn(20));
    console.timeEnd(`${i+1}`);
})
 console.log(calcMap)