function largestPalindromeProduct(n) {
  const palindrome = (m) => {
    let numarr = Array.from(m.toString(), Number),
        pal = false ;
    for ( let i = 0 ; i <= numarr.length; i++){
       if ( numarr[i] == numarr[numarr.length - i - 1]) {
         pal =  true;
       } else {
         pal = false;
         break;
       }
    }
    return pal;
  }
  let largestPalproduct = 1
  for (let i = 10 ; i < Math.pow(10, n) ; i++) {
     for (let j = 10 ; j < Math.pow(10, n) ; j++) {
       if ( palindrome(i * j) && largestPalproduct < i*j) {
         console.log(i*j)
          largestPalproduct = i * j
       }
     }
  }
  return largestPalproduct;
}
console.log(largestPalindromeProduct(2));
