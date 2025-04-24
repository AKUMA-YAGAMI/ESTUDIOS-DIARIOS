

let myName = 'casper'

let saludo = 'hola,' + myName + '!!!!'

console.log(saludo)

console.log(typeof saludo)


//LONGITUD DE STRING

console.log(saludo.length)

// ACCESO A CARACTERES

console.log(saludo[0])
console.log(saludo[14])

//PROPIEDADES DE STRINGS 

console.log(saludo.toUpperCase()) // CHANGE THE TEXT TO UPPERCASE
console.log(saludo.toLowerCase()) // CHANGE THE TEXT TO LOWERCASE
console.log(saludo.indexOf('casper')) // TELLS YOU THE POSITION OF THE STRING
console.log(saludo.includes('casper')) // TELLS YOU IF THE STRING EXIST
console.log(saludo.slice(2, 8)) // prints a specific part of the string
console.log(saludo.replace('casper', 'akuma')) // replace a value for a new one

// TEMPLATE LITERALS

let saludo2 =  `HOLA
COMO
ESTAS`               //backtick allow you to print the string in multiple lines

console.log(saludo2)


























