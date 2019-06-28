/*JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case. */
function convertToRoman(num) {
  let roman = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
  };
  let rom = "";
  while (num > 0) {
    num = parseInt(num, 10);
    if (num / 1000 >= 1) {
      rom = rom + roman[1000].repeat(num / 1000);
      num = removefirstdigit(num);
    } else if (num / 500 >= 1 && num < 900) {
      rom = rom + roman[500] + roman[100].repeat((num - 500) / 100);
      num = removefirstdigit(num);
    } else if (num / 500 > 1 && num > 900) {
      rom = rom + roman[100] + roman[1000];
      num = removefirstdigit(num);
    } else if (num / 100 > 1 && num >= 400) {
      rom = rom + roman[100] + roman[500];
      num = removefirstdigit(num);
    } else if (num / 100 > 1 && num < 400) {
      rom = rom + roman[100].repeat(num / 100);
      num = removefirstdigit(num);
    } else if (num / 10 >= 9) {
      rom = rom + roman[10] + roman[100];
      num = removefirstdigit(num);
    } else if (num / 10 > 5 && num / 10 < 9) {
      rom = rom + roman[50] + roman[10].repeat((num - 50) / 10);
      num = removefirstdigit(num);
    } else if (num / 10 >= 4) {
      rom = rom + roman[10] + roman[50];
      num = removefirstdigit(num);
    } else if (num / 10 < 4 && num / 10 > 1) {
      rom = rom + roman[10].repeat(num / 10);
      num = removefirstdigit(num);
    } else {
      num = num;
      rom = rom + roman[num];
      num = removefirstdigit(num);
    }
  }
  return rom;
  function removefirstdigit(no) {
    return no.toString().substring(1);
  }
}

console.log(convertToRoman(649));
