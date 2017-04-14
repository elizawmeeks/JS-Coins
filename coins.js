/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

var change = 0.67;

function add (a, b) {
  var sum = a + b
  return sum
}

console.log(add(1,2));

function coinCounter (input) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};
  
  coinPurse.quarters = 0;
  coinPurse.dimes = 0;
  coinPurse.nickels = 0;
  coinPurse.pennies = 0;

  while (input >= 0.25) {
    coinPurse.quarters += 1;
    input = input - 0.25;
  }

  while (input >= 0.10) {
    coinPurse.dimes += 1;
    input = input - 0.10;
  }

  while (input >= 0.05) {
    coinPurse.nickels += 1;
    input = input - 0.05;
  }

  while (input > 0) {
    coinPurse.pennies += 1;
    input = input - 0.01;
  }

  return coinPurse;
}

var coins = coinCounter(change);
console.log(coins);