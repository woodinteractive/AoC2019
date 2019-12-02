const input = require('./input01.js')
const inputArray = input.split(/\n/)

function getFuel(mass) {
  return (Math.floor(parseInt(mass) / 3)) - 2
}

// Part One Solution
let part01 = inputArray.reduce((acc, cur) => {
  return getFuel(cur) + acc
}, 0)

console.log(part01)

// Part Two Solution
let part02 = inputArray.reduce((acc, cur) => {
  let fuel = cur;
  let total = 0;

  while (fuel > 0) {
    fuel = getFuel(fuel)
    if (fuel > 0) total += fuel
  }

  return total + acc
}, 0)

console.log(part02)