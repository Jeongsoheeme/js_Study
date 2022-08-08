function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
  
    if (n % 2 === 0 || n % 3 === 0) return false;
  
    for (let i = 0; i < 5; i++) {
      if (n % i == 0 || n % (i + 2) === 0) return false;
    }
    return true;
  }