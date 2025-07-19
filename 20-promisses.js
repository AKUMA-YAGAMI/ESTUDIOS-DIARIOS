/*

const { resolve } = require("path");

const miNumero = new Promise((resolve, reject) =>{
  const numfav = 78;

  if(numfav % 2 === 0){
    resolve('muy bien')
  }else{
    reject('mal mal')
  }
});


miNumero
  .then((mensaje) => {
    console.log('Éxito:', mensaje);
  })
  .catch((error) => {
    console.log('Error:', error);
  });




  const verificarUsuario = new Promise((resolve, reject) => {

const nUsuario = 'akuma';

if(nUsuario.length > 3){
    resolve('correcto')
}else{
    reject('incorrecto')
}


  });

  verificarUsuario
  .then((rslv) =>{
    console.log(rslv)
  })
  .catch((rjct) => {
console.log(rjct)
  });













const numPositive = new Promise((resolve, reject) => {
  const nPositive = 1;
  if (nPositive > 0) {
    resolve('Número positivo');        // mensaje base
  } else {
    reject('Número negativo');
  }
});

numPositive
  .then(msg => msg + ' Validado')   // agrega texto
  .then(msg => console.log(msg))       // imprime resultado final
  .catch(err => console.log(err));     // maneja error





*/

const { promises } = require("dns");





/*






const verificarEdad = new Promise((resolve, reject) =>{
const edad = 17;

if(edad >= 18){
    resolve(`edad valida de ${edad}`)
}else{
    reject('Acceso denegado')
}



});

verificarEdad
.then(revisionEdad => revisionEdad + ' ......accediendo al sistema' )
.then(revisionEdad =>console.log (revisionEdad)) 

 
.catch(err => console.log('error', err));

*/





/*


const newUser = new Promise((resolve, reject) =>{
const usuario = 'Akuma';
const password = '1234';

if (usuario.length >= 3 && password.length >= 3){
    resolve(usuario)
}else{
    reject('el nombre de usuario debe ser de mas de 3 letras al igual la contraseña')
}


});

newUser
.then(user => user + ' estamos procesando tu informacion ........')
.then(user =>{console.log(`tu nombre de usuario es ${user}  fuiste registrado exitosamente`)})
.catch(err => console.log(err));

*/


/*
const verificarProducto = new Promise((resolve, reject) => {
    const producto = 'laptop'
    const stock = 2

if (producto === 'laptop' && stock >= 1){
    resolve(`producto disponible : ${producto}`)
}else{
    reject('producto agotado')
}


});


verificarProducto
.then(produc => ` ${produc}`)
.then(produc => console.log(`${produc} encontrado y disponible`))
.catch(error => console.log('ERROR',error));


*/


/*


const pedidoComida = new Promise((resolve, reject) => {
const pedido = 'pizza'

if (pedido === 'pizza'){
    resolve('Preparando pizza')
}else{
    reject('producto no disponible')
}



});

pedidoComida
.then(pediComida => `${pediComida} 🍕`)
.then(pediComida2 => `${pediComida2} , en horno`)
.then(pediComida3 => console.log(pediComida3))
.catch(err => console.log('error',err))


*/


/*

const prepararPizza = new Promise(resolve => {
  setTimeout(() => resolve('Pizza lista'), 1000);
});

const enfriarRefresco = new Promise(resolve => {
  setTimeout(() => resolve('Refresco frío'), 500);
});

const ponerMesa = new Promise(resolve => {
  setTimeout(() => resolve('Mesa lista'), 1500);
});

Promise.all([prepararPizza, enfriarRefresco, ponerMesa])
  .then(resultados => {
    console.log('Todo listo:');
    resultados.forEach(tarea => console.log(tarea));
  })
  .catch(err => console.log('¡Algo falló!', err));



*/







/////////////////////promise.all///////////////////////





/*


const calentarDojo = new Promise(resolve => {
    setTimeout(() => resolve('dojo caliente'), 1000);
});

const afilarKatana = new Promise (resolve =>{
    setTimeout(()=> resolve('katana afilada'), 500)
});


const ponerMusica = new Promise( resolve =>{
    setTimeout(()=> resolve ('musicaa encendida'))
});


Promise.all([calentarDojo, afilarKatana, ponerMusica])
.then(resultados=>{
    console.log('todo listo :')
    resultados.forEach(actividad => console.log(actividad))
})
.catch(err => console.log('error', err))

*/

/////////////////////////ASYNC///////////////////////


async function traerUsuario (){
    return 'akuma'
}


traerUsuario()
.then(dato =>console.log(dato));



/////////////////////////////////////////////Promise.resolve
function traerUsuario() {
  return Promise.resolve('akuma');
}

traerUsuario().then(dato => console.log(dato));


///////////////////////////await//////////




// Función asincrónica que devuelve una promesa con el valor 'akuma'
async function traerUsuario() {
  return 'akuma';
}

// Aquí se usa .then() (forma clásica de manejar promesas)
traerUsuario().then(dato => console.log(dato));

// Nueva forma usando async/await
async function main() {
  const respuesta = await traerUsuario();  // Esperamos el resultado de traerUsuario
  console.log(respuesta);                 // Mostramos el resultado
}

main(); // Llamamos la función principal para que se ejecute