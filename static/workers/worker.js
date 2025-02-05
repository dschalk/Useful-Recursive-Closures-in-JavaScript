
// src/workers/prime-worker.js
self.onmessage = function (event) {
    const number = event.data;
    if (typeof number !== 'number' || number < 2) {
        self.postMessage(null);
        return;
    }

    function isPrime(num) {
        for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    let largestPrime = null;
    for (let i = number - 1; i >= 2; i--) {
        if (isPrime(i)) {
            largestPrime = i;
            break;
        }
    }

    self.postMessage(largestPrime);
};
