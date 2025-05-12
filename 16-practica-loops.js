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

/*
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
console.log(devoT) */

  /*

  Calcular el total neto de ingresos (ventas - devoluciones).

Contar cuántas ventas y cuántas devoluciones hubo.

Mostrar un array de los id de las transacciones cuyo monto fue mayor a 500.*/


/*

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
















  let edades = [12, 25, 8, 32, 17, 45];
let newArray = []
for (filtra of edades){
  if(filtra >= 18){
newArray.push(filtra)
  }
}





console.log(newArray); // [25, 32, 45]














let mayoresDeEdad = [12, 25, 8, 32, 17, 45]

let otroA = []

for (venfa of mayoresDeEdad){
  if (venfa >= 18 ){
    otroA.push(venfa)
  }
}

console.log(otroA)





function mayoresDeEdad(edades) {
  let resultado = [];
  for (let edad of edades) {
    if (edad >= 18) {
      resultado.push(edad);
    }
  }
  return resultado;
}

console.log(mayoresDeEdad([12, 25, 8, 32, 17, 45]));








let productos4 = [
  { nombre: "Laptop", precio: 1200 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 75 },
  { nombre: "Monitor", precio: 300 },
  { nombre: "USB", precio: 10 }
];

function productosCaros(productos4){

  let newAaa = []
for (pro of productos4)
  if (pro.precio > 100){
    newAaa.push(pro.precio)
  }

return newAaa
  }

  console.log(productosCaros(productos4)) */

/*
  let libros = [
    { titulo: "El señor de los anillos", paginas: 1178 },
    { titulo: "Cien años de soledad", paginas: 417 },
    { titulo: "Rebelión en la granja", paginas: 112 },
    { titulo: "Harry Potter y la piedra filosofal", paginas: 309 },
    { titulo: "El principito", paginas: 96 }
  ];





let newFilter = libros.filter(function filtrador(libro) {
  return libro.paginas > 300 && libro.titulo.length > 10;
});

console.log(newFilter); */

/*
let operaciones = [
  { tipo: "venta", categoria: "electronica", monto: 1200 },
  { tipo: "venta", categoria: "hogar", monto: 300 },
  { tipo: "devolución", categoria: "electronica", monto: 1200 },
  { tipo: "venta", categoria: "ropa", monto: 150 },
  { tipo: "devolución", categoria: "ropa", monto: 150 },
  { tipo: "venta", categoria: "hogar", monto: 500 },
  { tipo: "venta", categoria: "electronica", monto: 800 }
];

let ventas1 = operaciones.filter(num => num.tipo === "venta");
let devo1 = operaciones.filter(num => num.tipo === "devolución");

console.log(`Estas son las ventas: ${JSON.stringify(ventas1)}`);
console.log(`Estas son las devoluciones: ${JSON.stringify(devo1)}`);  */


/*
Crear un nuevo array que contenga solo las ventas (no devoluciones).

Crear un array con las devoluciones únicamente.

Obtener la suma total de ventas.

Obtener la suma total de devoluciones.

Mostrar un mensaje personalizado en consola como este:
"Ganancia neta: $X (Ventas: $Y - Devoluciones: $Z)" */



/*


let productos = [
  { nombre: "Laptop", precio: 1200 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 75 },
  { nombre: "Monitor", precio: 300 },
  { nombre: "USB", precio: 10 }
];

let newA = productos.filter(num => num.precio > 100);
let newM = newA.map(num => num.nombre.toUpperCase());

console.log(newM);
*/








/*

let empleados = [
  { nombre: "Laura", sueldo: 1200, activo: true },
  { nombre: "Carlos", sueldo: 950, activo: false },
  { nombre: "Marta", sueldo: 1100, activo: true },
  { nombre: "Luis", sueldo: 1050, activo: true },
  { nombre: "Ana", sueldo: 990, activo: false }
];

let activosF = empleados.filter(num => num.activo === true)

let nombresM = activosF.map(num => num.nombre.toUpperCase())

let totalS = activosF.reduce((acum, num) =>acum + num.sueldo, 0 )


console.log(` Los trabajadores activos actualmentre son ${nombresM} los cuales tienen un sueldo combinado de $ ${totalS}`)



*/
/*





let inventario = [
  { nombre: "Laptop", precio: 1200, stock: 4, vendidos: 2 },
  { nombre: "Mouse", precio: 25, stock: 10, vendidos: 6 },
  { nombre: "Teclado", precio: 75, stock: 5, vendidos: 5 },
  { nombre: "Monitor", precio: 300, stock: 3, vendidos: 1 },
  { nombre: "USB", precio: 10, stock: 20, vendidos: 15 }
];



let stockSi = inventario.filter(num => num.stock >= 1)

let stockMa = stockSi.map(num => num.nombre.toUpperCase())

let totalDi = inventario.reduce((acumu, num)=> acumu + (num.precio * num.vendidos), 0)


console.log(`Productos disponibles ${stockMa.join(',')}. Con una valor de $ ${totalDi}.00`)




/*Filtra los productos que aún tienen stock disponible.

De esos productos, obtén una lista con los nombres en mayúsculas.

Calcula el total de dinero generado por las ventas (precio * vendidos) de todos los productos.

Muestra todo en un mensaje como este:*/








/*








let cursos = [
  { nombre: "JavaScript básico", duracion: 10, completado: true },
  { nombre: "HTML y CSS", duracion: 8, completado: false },
  { nombre: "Git y GitHub", duracion: 5, completado: true },
  { nombre: "React", duracion: 12, completado: false },
  { nombre: "Node.js", duracion: 9, completado: true }
];



let cursosCo = cursos.filter(num => num.completado === true)

console.log(cursosCo)


let mapC = cursosCo.map(num => num.nombre.toUpperCase())
console.log(mapC)


let duracionC = cursosCo.reduce((acumu, num)=> acumu + num.duracion,0)

console.log(duracionC)



console.log(`Los cursos actualmente completados son los siguientes : ${mapC.join(',')}. Los cuales tienen una duracion aproximada de ${duracionC} hrs en total. Como le quedo el ojo sensei? bromita por aqui `)


/*   Filtrar solo los cursos completados.

Convertir sus nombres a mayúsculas.

Calcular la duración total de los cursos completados.

Mostrarlo todo en un mensaje bonito. */







const ventas = [
  { producto: "camisa", precio: 250, cantidad: 3 },
  { producto: "pantalón", precio: 400, cantidad: 2 },
  { producto: "gorra", precio: 150, cantidad: 4 },
  { producto: "camisa", precio: 250, cantidad: 1 },
  { producto: "tenis", precio: 800, cantidad: 1 },
  { producto: "pantalón", precio: 400, cantidad: 1 },
];

let myMap = ventas.map(num => num.precio * num.cantidad )
let myFilter = ventas.filter(num=> num.cantidad >=1
)


let myReduce = ventas.reduce((acumu, num)=> acumu + (num.producto === "camisa" && num.precio * num.cantidad), 0)



let myReduce1 = ventas.reduce((acumu, num)=> acumu + (num.producto === "tenis" && num.precio * num.cantidad), 0)



let myReduce2 = ventas.reduce((acumu, num)=> acumu + (num.producto === "pantalón" && num.precio * num.cantidad), 0)


let myReduce3 = ventas.reduce((acumu, num)=> acumu + (num.producto === "gorra" && num.precio * num.cantidad), 0)

console.log(myReduce)


console.log(`el total de tenis vendidos fue 1 $ ${myReduce} el total de gorras fueron 4 $ ${myReduce3} el total de pantalones fueron 3 $ ${myReduce2} por ultimo tenemos las camisas que fueron 4 $ ${myReduce} asi esta bien patron o que mas quiere `)

/*
🪙 Calcular el total de ingresos: la suma de precio × cantidad de cada venta.

Obtener un array sin productos repetidos, solo los nombres de productos vendidos.

 Saber cuántas camisas se vendieron en total.

 Crear un resumen por producto, como este: */