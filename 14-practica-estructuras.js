

/*

console.log(animalArray)

animalArray.push('arañas')
animalArray.unshift('escarabajos')

console.log(animalArray)
console.log(animalArray.includes('kanguro'))






console.log(animalArray.splice(2, 1))
console.log(animalArray)




let mySet = new Set()

mySet = new Set(['the whitcher 1', 'the whitcher 2', 'the whitcher 3', 'the whitcher 4', 'the whitcher 5',])

console.log(mySet)

mySet.add('the witcher 6')
mySet.add('the whitcher 1')
mySet.delete('the whitcher 1')
mySet.has('the whitcher 7')


console.log(mySet.has('the whitcher 7'))



let newMap = new Map()

newMap = new Map([
    ['enero', 1],
    ['febrero', 2],
    ['marzo', 3]
])
console.log(newMap)

console.log(newMap.has(7))

*/


let animalArray = ['perro', 'gato', 'cobra', 'halcon', 'tiburon']

let animalSet = new Set(animalArray)

console.log(animalSet)

let mapAnimal = [...animalSet].map((animal, index) => [animal, index])


console.log(mapAnimal)