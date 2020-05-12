function fiboEvenSum(n) {
  // You can do it!
  const even = (m) => {
    if (m%2 === 0) {
      return true;
    } else {
      return false
    }
  }
  let sumeven = 2 , 
      fib = [1, 2];
  for (let i=2 ; i < n; i++) {
    fib.push(fib[i-1] + fib[i-2])
    if (fib[i] < n)
    {
        even(fib[i]) ? sumeven += fib[i] : sumeven += 0
    }    
  }
  return sumeven;
}

console.log(fiboEvenSum(10));
