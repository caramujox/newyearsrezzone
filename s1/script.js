let country = 'Brazil'
const continent = 'South America'
let population = 212000000
const isIsland = false
language = 'Portuguese'

console.log(country)
console.log(continent)
console.log(population)
console.log(isIsland)

halfPop = population / 2 + 1

console.log(halfPop)

let finlandPopulation = 6000000
let avgPop = 33000000

if (finlandPopulation > population) {
  console.log(
    `${country} population (${population}) is smaller than Finland population(${finlandPopulation})`
  )
} else {
  console.log(
    `${country} population (${population}) is greater than Finland population(${finlandPopulation})`
  )
}

if (avgPop > population) {
  console.log(`${country} population (${population}) is smaller than avg`)
} else {
  console.log(`${country} population (${population}) is greater than avg`)
}

console.log(
  `${country} is in ${continent}, and its ${population} people speak ${language}`
)
