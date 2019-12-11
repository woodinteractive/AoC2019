
function isValid(password, part) {
  let twoAdjacent = false
  let onlyIncreasing = true

  for (let i = 0; i < password.length; i++) {
    const prevNumber = password[i - 1]
    const currNumber = password[i]
    const nextNumber = password[i + 1]
    const numberAfterNext = password[i + 2]

    if (part === 1) {
      if (password[i] === password[i + 1]) twoAdjacent = true
    } else {
      if (prevNumber !== currNumber && currNumber === nextNumber && currNumber !== numberAfterNext) twoAdjacent = true
    }

    if (Number(password[i]) > Number(password[i + 1])) onlyIncreasing = false
  }

  return twoAdjacent && onlyIncreasing
}

function findCodes(input, part) {
  const range = input.split('-').map(Number);

  let counter = 0;

  for (let i = range[0]; i <= range[1]; i++) {
    if (isValid(`${i}`, part)) {
      counter++;
    }
  }

  return counter;
};

console.log('part 1', findCodes('271973-785961', 1))
console.log('part 2', findCodes('271973-785961', 2))