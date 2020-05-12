function largestPrimeFactor(number) {
  if (number == 2) { return 2 }
  const prime =(m) => {
    for ( let i = 2; i <= Math.ceil(Math.sqrt(m)) ; i++) {
        if (m % i == 0) {
          return false
        }
    }
    return true
  }
  let pfact = []
  let loopnumber = number
  if (number > 100) {
    loopnumber = Math.sqrt(number)
  }
  for ( let i = 2; i <= loopnumber; i++)
  { 
    if (number%i === 0 && prime(i)){
        pfact.push(i)
    }
  }
  //console.log(pfact)
  return Math.max(...pfact);
}

console.log(largestPrimeFactor(600851475143));
