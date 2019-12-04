const input = require('./input03')

const ex1 = `R75,D30,R83,U83,L12,D49,R71,U7,L72
U62,R66,U55,R34,D71,R55,D58,R83`

const ex2 = `R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51
U98,R91,D20,R16,D67,R40,U7,R15,U6,R7`

function parsePaths(paths) {
  return paths.split('\n')
    .map(path => path.split(',')
      .map(point => [
        point.charAt(0),
        parseInt(point.substring(1))
      ]));
}

function getPoints(path) {
  let points = []
  let current = [0, 0, 0, 0]

  path.forEach(([direction, steps]) => {
    const x = direction === "R" ? 1 : direction === "L" ? -1 : 0
    const y = direction === "U" ? 1 : direction === "D" ? -1 : 0
    for (let i = 0; i < steps; i++) {
      current = [current[0] + x, current[1] + y, current[2] + 1, current[3]]
      points.push(current)
    }
    current[3]++
  });
  return points
}

function getIntersections(path1, path2) {
  let intersections = []
  path1.forEach(([x, y], index) => {
    let result = path2.filter(path => path[0] === x && path[1] === y)
    if (!!result.length) {
      intersections.push([result[0], path1[index]])
    }
  })
  return intersections
}

function getClosestByDistance(intersections) {
  let closest = 0
  intersections.forEach((intersection) => {
    let total = Math.abs(intersection[0][0]) + Math.abs(intersection[0][1])
    if (total < closest || closest === 0) closest = total
  })
  return closest
}

function getClosestBySteps(intersections) {
  let closest = 0

  intersections.forEach((intersection) => {
    let total = intersection[0][2] + intersection[1][2]
    if (total < closest || closest === 0) closest = total
  })
  return closest
}

const paths = parsePaths(input)
const points1 = getPoints(paths[0])
const points2 = getPoints(paths[1])
const intersections = getIntersections(points1, points2)

// Part 1 Solution
const closestByDistance = getClosestByDistance(intersections)
console.log(closestByDistance)

// Part 2 Solution
const closestBySteps = getClosestBySteps(intersections)
console.log(closestBySteps)