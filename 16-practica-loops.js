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
 /* 
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






 /* 



let estudiambres = [
    { nombre: "Sakura", nota: 9 },
    { nombre: "Goku", nota: 10 },
    { nombre: "Naruto", nota: 6 },
    { nombre: "Luffy", nota: 4 },
    { nombre: "Ichigo", nota: 8 }
  ];

  let siPaso = estudiambres.filter((num => num.nota >7))

  console.log(siPaso)

  let newArray = siPaso.map((num => num.nombre.toUpperCase()))
  console.log(newArray)
    







  let ventas = [
    { nombre: "Carlos", monto: 800 },
    { nombre: "María", monto: 1200 },
    { nombre: "Pedro", monto: 950 },
    { nombre: "Lucía", monto: 2000 },
    { nombre: "Ana", monto: 300 },
    { nombre: "Jorge", monto: 1700 }
  ];


  let masMil = ventas.filter((num=> num.monto > 1000))

  console.log(masMil)

  let masMmay = masMil.map((num => num.nombre.toUpperCase()))
  console.log(masMmay)

  let promedio = ventas.map((num=> num.monto))

  console.log(promedio)



  let arrayRed = [3, 5, 7, 9, 11]

  let total = arrayRed.reduce((acumu, nume) => acumu + nume, 0)

  console.log(total)





let array1 = [3, 5, 7, 9, 11]

let suma1 = array1.reduce((acumu, num)=> acumu + num, 0)

console.log(suma1)








let productos = [
    { nombre: "Laptop", precio: 1200, vendidos: 5 },
    { nombre: "Mouse", precio: 25, vendidos: 30 },
    { nombre: "Teclado", precio: 75, vendidos: 15 },
    { nombre: "Monitor", precio: 300, vendidos: 10 },
    { nombre: "USB", precio: 10, vendidos: 50 }
  ]


let filtra = productos.filter(num => num.precio > 50)

console.log(filtra)

let map = filtra.map(num=> num.nombre.toUpperCase())

console.log(map)

let suma = productos.reduce((conta, producto) => conta + (producto.precio * producto.vendidos), 0)

console.log(`ESTA ES LA CANTIDAD QUE ME SOLICITASTE SENSEI APOCO NO TE APANTALLE PONIENDO ESTO EN BACTICKS JAJAJ YA PUE SMUCHA CREMA DE MI PARTE LA CANTIDAD QUE REQUIERES ES ESTA ${suma}`)
  /* 
  Filtra solo los productos con precio mayor a 50.

Crea un nuevo array con solo los nombres de esos productos en mayúsculas.

Calcula el ingreso total generado por todos los productos (precio × vendidos) usando reduce.
  
  */


let transacciones = [
    { id: 1, tipo: "venta", monto: 1200 },
    { id: 2, tipo: "venta", monto: 50 },
    { id: 3, tipo: "devolución", monto: 300 },
    { id: 4, tipo: "venta", monto: 700 },
    { id: 5, tipo: "devolución", monto: 120 },
    { id: 6, tipo: "venta", monto: 30 },
    { id: 7, tipo: "venta", monto: 1500 },
    { id: 8, tipo: "devolución", monto: 100 }
  ];
  


  let ventaR = transacciones.reduce((conta, num) => {
    return num.tipo === "venta" ? conta + num.monto : conta;
  }, 0);
  
  let devoR = transacciones.reduce((conta, num) => {
    return num.tipo === "devolución" ? conta + num.monto : conta;
  }, 0);
  
  console.log("Total ventas: $" + ventaR);
  console.log("Total devoluciones: $" + devoR);

let devolucionesT = transacciones.filter(num => num.tipo === 'devolución');

let devoT = devolucionesT.length;


let compraT = transacciones.filter(num => num.tipo === 'venta');

let compT = compraT.length;





console.log(compT);
console.log(devoT)

  /*

  Calcular el total neto de ingresos (ventas - devoluciones).

Contar cuántas ventas y cuántas devoluciones hubo.

Mostrar un array de los id de las transacciones cuyo monto fue mayor a 500.*/




let transacciones3 = [
    { id: 1, tipo: "venta", monto: 1200 },
    { id: 2, tipo: "venta", monto: 50 },
    { id: 3, tipo: "devolución", monto: 300 },
    { id: 4, tipo: "venta", monto: 700 },
    { id: 5, tipo: "devolución", monto: 120 },
    { id: 6, tipo: "venta", monto: 30 },
    { id: 7, tipo: "venta", monto: 1500 },
    { id: 8, tipo: "devolución", monto: 100 }
];

let reduce = transacciones3.reduce((conta, num)=> conta + num.monto,0)

console.log(`el monto total de ventas es $ ${reduce} .00`)







let productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 75 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "USB", precio: 10 }
  ];


  let filtrale = productos.filter(num => num.precio > 100)

  console.log(filtrale)

  let mayuscula = filtrale.map(num => num.nombre.toUpperCase())

  console.log(mayuscula)



