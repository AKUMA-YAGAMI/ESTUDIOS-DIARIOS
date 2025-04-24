//LOOPS

//for

for (let i = 0; i < 5; i++ ) {
    console.log(`hola ${i}`)
}

const numbers = [1, 2, 3, 4, 5, 6]

for (let i = 0; i < numbers.length; i++ ) {
    console.log(`elemento : ${numbers[i]}`)
}

//WHILE
let i = 0
while(i<5){
    console.log(`hola ${i}`) 
    i++
}  

//DO WHILE

let i = 0
do {
    console.log(`hola ${i}`) 
    i++
}while(i<5)

    //FOR OF

 


let myArray = [1, 2, 3, 4]
let mySet = new Set()


mySet = new Set(['hola', true, 4])
let myMap = new Map()


myMap = new Map([   
    ['nombre', 'martin'],
    ['nombre2', 'enrique']
])

for(let valor of myArray){
    console.log(valor)
}

for(let valor of mySet){
    console.log(valor)
}

for(let valor of myMap){
    console.log(valor)
}

let oracion = 'hola chester'

for(value of oracion ){
    console.log(value)
}




for (let i = 0; i < 100; i++ ) {

    if (i% 2 == 1){
        continue
    }
    console.log(`${i}`)
}


/*
/*


//for while dowhile


for(let i = 1; i < 100;i++){
    console.log(i/ 2)
}




//WHILE
let i = 0
while(i<5){
    console.log(`hola ${i}`) 
    i++
}  

//DO WHILE

let i = 0
do {
    console.log(`hola ${i}`) 
    i++
}while(i<5)

    let i = 0
while(i<5){
    console.log(`hola ${i}`) 
    i++
}  */

/*
    for (let i = 0; i < 100; i++ ) {

        if (i% 2 == 1){
            continue
        }
        console.log(`${i}`)
    }
    



let nombres = ['juan', 'pedro', 'martin']

for(let value of nombres){
    console.log(value)
}

*/


let string = 'chingas a tu madre braise'

let arrayV = ['a', 'e', 'i', 'o', 'u']

let contador = 0

for (let perro of string){
    if (arrayV.includes(perro))
        contador ++
}

console.log(`este es el numero de vocales : ${contador}`)




let arrayN = ['1', '2', '3', '4', '8']

for (multiplica of arrayN)




console.log(`5 x ${multiplica} = ${multiplica*5}`)

let string1 = 'chingas a tu madre braise';
let reversed = '';

for (let i = string1.length - 1; i >= 0; i--) {
    reversed += string1[i]; // Agrega la letra al nuevo string, empezando por el final
}

console.log(reversed);


let frase = 'me gusta programar';
let invertida = '';

for (let i = frase.length -1; i >=0; i--) {
    invertida += frase[i];
}

console.log(invertida);


