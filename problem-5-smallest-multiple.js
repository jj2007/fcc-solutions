function smallestMult(n) {
  let mult = 1,
      smallestmul=1;
  for (let i = 1 ; i <= n; i++){
      mult *= i
  }
  //console.log(mult)
  for (let k = n ; k <= mult; k++){
      for (let j = 1 ; j <= n; j++){
          if(k % j == 0) {
            smallestmul = k;
          }  else {
            smallestmul = 0;
            break
          }
      }
  if(smallestmul > 1){
        break;
   }
  }
   return smallestmul;
}

console.log(smallestMult(5));
