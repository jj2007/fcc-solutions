// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
function rot13(str) { // LBH QVQ VG!
  let arr = str.split('');
  for(let i = 0 ; i < arr.length; i++) {
    
    if (arr[i].charCodeAt() >=65 && arr[i].charCodeAt() <=90 ) {
      if (arr[i].charCodeAt()-13 >= 65){
        arr[i] = String.fromCharCode(parseInt(arr[i].charCodeAt()-13))
      } else {
        let diff = 65 - (arr[i].charCodeAt()-13)
        arr[i] = String.fromCharCode(parseInt(91 - diff))
      }
      console.log(arr[i]);
    } 
  }
  return arr.join('');
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
