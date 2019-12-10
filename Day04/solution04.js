const input = `271973-785961`.split('-')

function getRange(input) {
  return input.map(n => parseInt(n))
}

// function parseStartSeq(input) {
//   return input.map(n => {
//     let arr = n.split('')
//     return arr.map(i => parseInt(i))
//   })[0]
// }

function explodeInt(value) {
  return value.toString().split('').map(i => parseInt(i))
}

function checkMatch() {

}

console.log(explodeInt(271973))

// const range = getRange(input)
// let seq = parseStartSeq(input)
// let codes = []

// for (let index = range[0]; index < range[1]; index++) {
//   const element = array[index];

// }

// while (range[0] < range[1]) {
// //   if (seq[2] < seq[1]) seq[2] = seq[1]
// //   if (seq[3] < seq[2]) seq[3] = seq[2]
// //   if (seq[4] < seq[3]) seq[4] = seq[3]
// //   if (seq[5] < seq[4]) seq[5] = seq[4]
// //   if (seq[6] < seq[5]) seq[6] = seq[5]

// //   let code = seq.slice(0).join('')
// //   codes.push(code)
// }
