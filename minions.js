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



console.log(actuallyCapitalizedMinions.every((minion)=>{
  return minion.charCodeAt(0) < 91;
}))

