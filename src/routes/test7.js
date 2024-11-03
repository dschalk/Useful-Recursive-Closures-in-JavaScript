
function segmentedSieve(L, R) {
    // Step 1: Generate small primes up to sqrt(R)
    const limit = Math.floor(Math.sqrt(R)) + 1;
    const smallPrimes = generateSmallPrimes(limit);

    // Step 2: Create a boolean array for the current segment [L, R], initially true
    const isPrime = Array(R - L + 1).fill(true);

    // Step 3: Mark non-primes in the current segment using small primes
    for (const prime of smallPrimes) {
        // Find the minimum number in [L, R] that is a multiple of prime
        let start = Math.max(prime * prime, Math.ceil(L / prime) * prime);
        if (start < L) start += prime;

        // Mark multiples of prime as non-prime in the range [L, R]
        for (let j = start; j <= R; j += prime) {
            isPrime[j - L] = false;
        }
    }

    // Step 4: Collect all primes from the current segment
    const primes = [];
    for (let i = L; i <= R; i++) {
        if (isPrime[i - L] && i > 1) {
            primes.push(i);
        }
    }

    return primes;
}

// Helper function to generate primes up to a given limit using the Sieve of Eratosthenes
function generateSmallPrimes(limit) {
    const isPrime = Array(limit + 1).fill(true);
    isPrime[0] = isPrime[1] = false; // 0 and 1 are not primes

    for (let i = 2; i * i <= limit; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= limit; j += i) {
                isPrime[j] = false;
            }
        }
    }
    function collatz(n) {
    while (n !== 1) {
        console.log(n);  // Replace with your desired output handling
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
    }
    console.log(1);  // Log the final 1 in the sequence
}

    // Collect the primes up to the limit
    const primes = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime[i]) {
            primes.push(i);
        }
    }
    return primes;
}

// Example usage:
const L = 2**52;
const R = 2**52 + 100;
const primesInRange = segmentedSieve(L, R);
console.log(primesInRange);
