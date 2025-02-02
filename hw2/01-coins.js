/** Exercise 01 - Coins **/

// Add your function here
const calculateChange = (amount) => {
  if (amount > 100) {
    return `$${amount.toFixed(2)} ==> Error: the number is too large`;
  } else if (amount === 0) {
    return `$${amount.toFixed(2)} ==> No change`;
  }

  // Convert amount to cents to prevent floating-point errors
  let remainingCents = Math.round(amount * 100);
  let originalAmount = amount.toFixed(2); // Store original amount for output

  // Coin values in cents
  const coins = [
    { name: "dollar", value: 100 },
    { name: "quarter", value: 25 },
    { name: "dime", value: 10 },
    { name: "nickel", value: 5 },
    { name: "penny", value: 1, plural: "pennies" },
  ];

  let resultParts = [];

  for (let coin of coins) {
    let count = Math.floor(remainingCents / coin.value);
    if (count > 0) {
      resultParts.push(
        `${count} ${count > 1 ? coin.plural || coin.name + "s" : coin.name}`
      );
      remainingCents %= coin.value;
    }
  }

  return `$${originalAmount} ==> ${resultParts.join(", ")}`;
};

// Sample test cases
console.log(calculateChange(4.62)); // "$4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies"
console.log(calculateChange(0.16)); // "$0.16 ==> 1 dime, 1 nickel, 1 penny"
console.log(calculateChange(150.11)); // "$150.11 ==> Error: the number is too large"

// Additional test cases
console.log(calculateChange(0.01));
console.log(calculateChange(0.1));
console.log(calculateChange(0.25));
console.log(calculateChange(0));
console.log(calculateChange(1));
console.log(calculateChange(99));
console.log(calculateChange(100));
console.log(calculateChange(0.99));
