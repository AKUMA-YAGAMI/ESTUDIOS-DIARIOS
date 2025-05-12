/*

// 1. forEach → Recorre cada elemento
const frutas = ['manzana', 'pera', 'plátano'];
frutas.forEach(function(fruta) {
  console.log('Fruta:', fruta);
});
// Output: Fruta: manzana ... etc.

// 2. find → Devuelve el primer elemento que cumple la condición
const numeros = [10, 20, 30, 40];
const encontrado = numeros.find(function(num) {
  return num > 25;
});
console.log('Número encontrado con find:', encontrado); 
// Output: 30

// 3. filter → Devuelve todos los elementos que cumplan la condición
const mayores = numeros.filter(function(num) {
  return num > 15;
});
console.log('Números filtrados:', mayores);
// Output: [20, 30, 40]

// 4. map → Transforma cada elemento y devuelve un nuevo array
const dobles = numeros.map(function(num) {
  return num * 2;
});
console.log('Doblados con map:', dobles);
// Output: [20, 40, 60, 80]

// 5. reduce → Acumula todos los valores en uno solo
const suma = numeros.reduce(function(acumulador, num) {
  return acumulador + num;
}, 0);
console.log('Suma total con reduce:', suma);
// Output: 100

// 6. splice → Elimina o reemplaza elementos en un array
const animales = ['perro', 'gato', 'conejo'];
animales.splice(1, 1); // Elimina 1 elemento desde la posición 1
console.log('Animales después de splice:', animales);
// Output: ['perro', 'conejo']


*/







const inventario = [
    { nombre: 'Monitor', categoria: 'Tecnología', precio: 3000, stock: 7 },
    { nombre: 'Mouse', categoria: 'Tecnología', precio: 500, stock: 12 },
    { nombre: 'Escritorio', categoria: 'Muebles', precio: 6000, stock: 3 },
    { nombre: 'Cafetera', categoria: 'Electrodomésticos', precio: 2000, stock: 0 },
    { nombre: 'Librero', categoria: 'Muebles', precio: 3500, stock: 5 },
    { nombre: 'Ventilador', categoria: 'Electrodomésticos', precio: 1500, stock: 2 }
  ];


  let find = inventario.find(function(encuentra){
   return encuentra.nombre === 'Cafetera'
    
    })
  
let filters = inventario.filter(filt => {
    if(filt.stock > 3){
        return true
    }else {return false}
      
    
})


let maps = inventario.map(names =>{
   return`${names.nombre } : ${names.precio}`
   
})


let reduces = inventario.reduce((acumu, num)=>{
    return acumu + (num.precio * num.stock);}, 0)


    const indiceEliminar = inventario.findIndex(producto => producto.stock === 0);

    // Paso 2: si existe, lo eliminamos con splice
    if (indiceEliminar !== -1) {
      inventario.splice(indiceEliminar, 1);
    }
    
    console.log(inventario);




    const usuarios = [
        { nombre: 'Ana', rol: 'admin' },
        { nombre: 'Luis', rol: 'editor' },
        { nombre: 'María', rol: 'lector' },
        { nombre: 'Carlos', rol: 'editor' }
      ];


      let ind = usuarios.findIndex(num=>{
        num.rol === 'editor'
      })

if(ind !== -1){
    usuarios.splice(ind, 1)
}


console.log(usuarios)







