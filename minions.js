// ************************************
// Minions.js
// ************************************

const minions = [
  "bob",
  "kevin",
  "stuart",
  "dave",
  "jerry",
  "mark",
  "tim",
  "phil",
  "carl",
]

// go down the array of minions, console.log that they are there.
minions.forEach((minion)=>{
  console.log(minion)  
})

// use the map method to capitalize each minion's name (except kevin's)
const capitalizedMinions = minions.map((minion)=>{
  if (minion.charAt(0) === 'k') {return minion}
  else {
    capName = minion.toUpperCase()
    return capName.charAt(0) + minion.slice(1)
  }
})
console.log(capitalizedMinions)

// use filter to remove minions that are not capitalized
const actuallyCapitalizedMinions = capitalizedMinions.filter((minion)=>{
  if (minion.charCodeAt(0) < 91) {
    return minion
  }
})

// use every to check whether all minions have been capitalized.
console.log(actuallyCapitalizedMinions.every((minion)=>{
  return isCapitalized(minion)
}))

// Bonus: Every
function isCapitalized (minion) {
  return minion.charCodeAt(0) < 91;
}

// Bonus: Find
const uncapitalizedMinion = capitalizedMinions.find((minion)=>{
  return minion.charCodeAt(0) > 91
})
console.log(uncapitalizedMinion)

// Bonus: findIndex
const index = capitalizedMinions.findIndex((minion)=>{
  return minion === uncapitalizedMinion
})
console.log(index)

// reassign the initial culprit
capitalizedMinions[index] = uncapitalizedMinion.replace(uncapitalizedMinion.charAt(0),uncapitalizedMinion.charAt(0).toUpperCase())
//                          ^      This expression was a little annoying to put together but I was glad to get it working        ^

console.log(capitalizedMinions.every((minion)=>{
  return isCapitalized(minion)
}))


// Bonus: reduce, sum of lengths
const nameLengths = minions.map((minion)=>{
  return minion.length
})

const sumLengths = nameLengths.reduce((acc, len)=>{
  return acc + len;
},0)

console.log(`The sum of all the lengths is ${sumLengths}`)


// Bonus: some
// check whether some minions name lengths are 6 or higher
const sixAndUp = nameLengths.some((name)=>{
  return name >= 6
})
console.log(`Some minions name lengths are 6 or above: ${sixAndUp}`)

// check whether some minions name lengths are 7 or higher
const sevenAndUp = nameLengths.some((name)=>{
  return name >= 7
})
console.log(`Some minions name lengths are 7 or above: ${sevenAndUp}`)

// 