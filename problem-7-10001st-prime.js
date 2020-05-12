function nthPrime(n) {
  const isPrime = (m) => {
    let prime = false
    for(let i =2; i< m ; i++){
      if (m % i == 0) {
        prime = false
        break;
      } else {
        prime = true
      }
    }
    return prime
  }
  let num = 1, primeArr=[2]
  while ( num  > 0) {
      if (isPrime(num)) {
        primeArr.push(num)
      }
      if (primeArr.length == n) {
        break;
      }
      num++;
  }
  return primeArr[primeArr.length - 1];
}

console.log(nthPrime(10001));
