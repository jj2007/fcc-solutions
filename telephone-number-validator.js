/* JavaScript Algorithms and Data Structures Projects: Telephone Number Validator
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false. */

function telephoneCheck(str) {
  let arr = str.split("");
  console.log(arr.slice(4, 8).includes(")"));
  let num = str.replace(/\D/g, "");

  let mybool =
    RegExp(
      /(^[1]| ){0,2}[\(| ]{0,2}[0-9]{3}[-| |\)]{0,2}[0-9]{3}[-| ]?[0-9]{4}/
    ).test(str) &&
    !RegExp(/(^[2-9]| |^[0]){2}/).test(str) &&
    num <= 19999999999;

  console.log(mybool);

  if (arr.slice(0, 3).includes("(") && mybool) {
    return arr.slice(3, 8).includes(")");
  } else if (arr.slice(3, 8).includes(")") && mybool) {
    return arr.slice(0, 3).includes("(");
  } else {
    return mybool;
  }
}

console.log(telephoneCheck("555)-555-5555"));
