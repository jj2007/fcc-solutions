/*Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key. */
function checkCashRegister(price, cash, cid) {
  var diff = cash - price;
  var cidcash = cid.reduce((sum, val) => {
    return sum + val[1];
  }, 0);
  let curr = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["DOLLAR", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ];
  var obj = {};
  obj.change = [];
  let rem = 0;
  let needed = 0;
  let flag = 0;
  if (cidcash >= diff) {
    for (let i = cid.length - 1; i >= 0; --i) {
      if (diff / curr[i][1] > 1 && cid[i][1] > 0) {
        needed = diff / curr[i][1];
        rem = diff - Math.min(curr[i][1] * Math.floor(needed), cid[i][1]);
        cidcash = cidcash - diff;
        diff = rem;
        if (curr[i][1] * needed < 0.1) {
          obj.change.push([
            cid[i][0],
            Math.min(Math.round(curr[i][1] * needed * 100) / 100, cid[i][1])
          ]);
          flag = 0;
        } else {
          obj.change.push([
            cid[i][0],
            Math.min(
              Math.round(curr[i][1] * Math.floor(needed) * 100) / 100,
              cid[i][1]
            )
          ]);
          flag = 0;
        }
        if (diff == 0 && cidcash == 0) {
          obj.status = "CLOSED";
        } else {
          obj.status = "OPEN";
        }
        if (Math.round((diff - 0.0099) * 100) / 100 > 0) {
          flag = 1;
        }
      }
    }
    if (obj.status == "CLOSED") {
      obj.change = cid;
    }
    if (flag == 1) {
      obj.status = "INSUFFICIENT_FUNDS";
      obj.change = [];
    }
  } else {
    obj.status = "INSUFFICIENT_FUNDS";
    obj.change = [];
  }
  return obj;
}

// Example cash-in-drawer array,
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]);
