let country = 'Brazil'
const continent = 'South America'
let population = 212000000
const isIsland = false
language = 'Portuguese'

console.log(country)
console.log(continent)
console.log(population)
console.log(isIsland)

// halfPop = population / 2 + 1

// console.log(halfPop)

// let finlandPopulation = 6000000
// let avgPop = 33000000

// if (finlandPopulation > population) {
//   console.log(
//     `${country} population (${population}) is smaller than Finland population(${finlandPopulation})`
//   )
// } else {
//   console.log(
//     `${country} population (${population}) is greater than Finland population(${finlandPopulation})`
//   )
// }

// if (avgPop > population) {
//   console.log(`${country} population (${population}) is smaller than avg`)
// } else {
//   console.log(`${country} population (${population}) is greater than avg`)
// }

// console.log(
//   `${country} is in ${continent}, and its ${population} people speak ${language}`
// )
/*
// type conversion and coersion
console.log('9' - '5') // -> 4
console.log('19' - '13' + '17') // -> 617
console.log('19' - '13' + 17) // -> 23
console.log('123' < 57) // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2) // -> 1143
*/

//equality
// numNeighbours = Number(
//   prompt('How many neighbour countries does your contry have?')
// )

// if (numNeighbours === 1) {
//   console.log('Only 1 border!')
// } else if (numNeighbours > 1) {
//   console.log('More than 1 borders')
// } else {
//   console.log('No Borders')
// }

//Logical Ops
if (language == 'English' && population < 50000000 && !isIsland) {
  console.log(`You should live in ${country} :)`)
} else {
  console.log('sorryy')
}

// Switch ops
switch (language) {
  case 'Chinese' || 'Mandarin':
    console.log('MOST number of native speakers!')
    break
  case 'Spanish':
    console.log('2nd place in number of native speakers')
    break
  case 'English':
    console.log('3rd Place')
    break
  case 'Hindi':
    console.log('4')
    break
  case 'Arabic':
    console.log('5th most spoken lang')
    break
  default:
    console.log('Great language too :D')
}

//ternarios
console.log(
  population > 33000000
    ? `${country} population is above avarage`
    : `${country} population is below avarage`
)
