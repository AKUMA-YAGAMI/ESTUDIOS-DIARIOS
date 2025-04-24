/*
let myArray = []
let i = 0

while (i < 10){
    myArray.push(i)
    i++
}

console.log(myArray)  */


/*

let newString = 'hol1a como3 1 esta2s 2 tu'
let numero = 0

for(perro of newString){
    if (newArray.includes(perro)){
        numero++
    }
}

console.log(numero)

for (let i = 0; i < 10; i++ ) {
    console.log(`5 x ${i} = ${i*5}`)
} 

let i = 1


while (i <= 10){

    console.log(`7 x ${i} = ${i*7}`)
    i++
}



let i = 1
let suma = 0

while ( i <=500){
    if(i%3 === 0 && i%7 === 0){
        suma++}
        
    i++

}

console.log(suma)




let i = 1
let suma= 0

while (i <=100){
    if(i%2===0){
suma += i
    }
    i++
}

console.log(suma)

*/

/*for(let i = 1; i< 100; i++){
    if(i%3 ===0){
        continue
    
}console.log(i)} */


/*

for(let i = 2; 2 < 100; i ++){
  let primo = true;
  for(let j = 2;j < i; j++){
    if (i%j===0){
        primo = false
    break
  }
    }
if(primo){
    console.log(i)
}
}



let numeros = [5, 12, 8, 130, 44];

let numeroM = 5

let cuentaN = 0

for (numeroG of numeros){
    if (numeroG > numeroM){
cuentaN++
    }
}

console.log(cuentaN)*/

let nombres = ["Juan", "Pedro", "Maria", "Ana"];

let nombresMayusculas = nombres.map(function(nombre) {
    return nombre.toUpperCase();
});

console.log(nombresMayusculas); 



let precios = [100, 200, 300, 400, 500];

let precioDes = precios.map(function (desc){
    return   desc - (desc * .20 )
})

console.log(precioDes)


let numeros = [10, 15, 22, 33, 40, 50, 63, 80, 90];

let numIm = numeros.filter(function(num){
    return num % 2 !== 0
})

console.log(numIm)


let estudiantes = [
    { nombre: "Juan", nota: 7 },
    { nombre: "Ana", nota: 4 },
    { nombre: "Pedro", nota: 9 },
    { nombre: "Luisa", nota: 6 },
    { nombre: "Marta", nota: 5 }
  ];

  let aprobados = estudiantes.filter(num => num.nota >= 6) 
    console.log(aprobados)

    let newArr = aprobados.map(function(estu){
return estu.nombre.toUpperCase()
    })
  

console.log(newArr)


  /*Usá filter para quedarte solo con los estudiantes que aprobaron (nota mayor o igual a 6).

Usá map para devolver un nuevo array con los nombres en mayúsculas de los aprobados. */


16-practica-loops.js