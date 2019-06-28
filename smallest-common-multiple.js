/*Intermediate Algorithm Scripting: Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6. */
function smallestCommons(arr) {
  let newarr = [];
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    newarr.push(i);
  }
  let ans = 1;
  for (let i = Math.max(...arr); i >= Math.min(...arr); i--) {
    ans = lcm(ans, i);
  }
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }
  function gcd(a, b) {
    var R;
    while (a % b > 0) {
      R = a % b;
      a = b;
      b = R;
    }
    return b;
  }
  console.log(ans);
  return ans;
}

smallestCommons([23, 18]);
