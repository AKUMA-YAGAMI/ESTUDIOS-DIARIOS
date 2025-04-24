//MAPS

//DECLARATION

let myMap = new Map()
console.log(myMap)

myMap = new Map([   
    ['nombre', 'martin'],
    ['nombre2', 'enrique']


]
)

console.log(myMap)

//COMMON METHODS

//SET   adds a value

myMap.set('nombre', 'casper')

console.log(myMap)


//GET  gets a specific value

console.log(myMap.get('nombre2'))


//has SEARCH A VALUE

console.log(myMap.has('nombre2'))

//DELETE

// clear()



// use . to see the methods

console.log(myMap.size)

console.log(myMap.forEach)
