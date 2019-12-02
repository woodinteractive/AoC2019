const input = require('./input02.js')

function intcodeProgram(noun, verb, arr) {
  let arrCopy = arr.slice(0);
  arrCopy[1] = noun
  arrCopy[2] = verb

  let index = 0

  while (arrCopy[index] !== 99) {
    indexA = arrCopy[index + 1]
    indexB = arrCopy[index + 2]
    indexC = arrCopy[index + 3]

    if (arrCopy[index] === 1) {
      arrCopy[indexC] = arrCopy[indexA] + arrCopy[indexB]
    }
    if (arrCopy[index] === 2) {
      arrCopy[indexC] = arrCopy[indexA] * arrCopy[indexB]
    }
    index += 4
  }
  return arrCopy[0]
}
// Part 1 Solution
console.log('Part 1 Solution: ', intcodeProgram(12, 2, input))

function getNounVerb(arr, target) {
  let output;
  let n = 0
  let v = 0

  do {
    let arrCopy = arr.slice(0);
    output = intcodeProgram(n, v, arrCopy)
    if (output === target) {
      return 100 * n + v
    }

    if (v === 99) {
      n++
      v = 0
    } else {
      v++
    }
  } while (output !== target);
}

// Part 2 Solution
console.log('Part 2 Solution: ', getNounVerb(input, 19690720))