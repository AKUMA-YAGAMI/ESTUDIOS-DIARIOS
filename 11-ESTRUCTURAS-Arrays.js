

let myArray = []

console.log(myArray)



myArray = [1, 'hola' , true, 4]
console.log(myArray)

console.log(myArray.includes(1))
console.log(myArray.indexOf(1))
console.log(myArray[2])

//COMMON METHODS

myArray.push('casper')//coloca un elemento en la ultima posicion
myArray.push(253235)
console.log(myArray)

myArray.pop()// ELIMINA EL ULTIMO ELEMENTO INGRESADO
console.log(myArray.pop())


myArray.shift() //elimina el primer elemento
myArray.unshift(2323, 2323)//agrega elementos al comienzo del array

console.log(myArray)


//LENGTH

console.log(myArray.length) //te da la medida de tu array

//CLEAR

// myArray = []

console.log(myArray)

//SLICE

console.log(myArray.slice(2, 3))


//includes search a value 

console.log(myArray.includes('puto'))