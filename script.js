
/* EJEMPLO  1
// Seleccionamos el título y el botón
let titu = document.getElementById('titulo');
let boton = document.getElementById('cambiarTexto');

// Al hacer clic, cambiamos el texto del título
boton.addEventListener('click', () => {
  titu.textContent = 'Hola sensei';
}); */





/* EJEMPLO 2
let titu = document.getElementById('mensaje');
let boton = document.getElementById('cambiarEstilo');

// Al hacer clic, cambiamos el texto del título

boton.addEventListener('click', () => {
  titu.style.color = 'red'
  titu.style.backgroundColor = 'black'
}
) */








/*  EJEMPLO 3
// Seleccionamos el contenedor donde se agregarán los párrafos
const conte = document.getElementById('contenedor');

// Seleccionamos el botón que dispara el evento
const but = document.getElementById('agregarParrafo');

// Agregamos un listener para el clic en el botón
but.addEventListener('click', () => {
  // Creamos un nuevo elemento <p>
  const newP = document.createElement('p');

  // Definimos el texto que tendrá el nuevo párrafo
  newP.textContent = 'Nuevo párrafo creado por Akuma';

  // Le aplicamos un estilo para que el texto sea rojo
  newP.style.color = 'red';

  // Añadimos el nuevo párrafo como hijo del contenedor
  conte.appendChild(newP);
}); */






/* EJEMPLO 4
// Seleccionamos el párrafo que queremos eliminar
let eli = document.getElementById('paraEliminar');

// Seleccionamos el botón que al hacer clic eliminará el párrafo
let but = document.getElementById('botonEliminar');

// Al hacer clic, eliminamos el párrafo directamente del DOM
but.addEventListener('click', () => {
  eli.remove();
}); */





/* EJEMPLO 5


// Obtenemos el párrafo que queremos mostrar u ocultar
let parra = document.getElementById('parrafoSecreto');

// Obtenemos el botón que usaremos para alternar la visibilidad
let bot = document.getElementById('botonToggle');

// Inicialmente ocultamos el párrafo usando display: none
parra.style.display = 'none';

// Agregamos un evento al botón para alternar el display
bot.addEventListener('click', () => {
  // Si el párrafo está oculto, lo mostramos
  if (parra.style.display === 'none') {
    parra.style.display = 'flex';
  } else {
    // Si no está oculto, lo volvemos a ocultar
    parra.style.display = 'none';
  }
});
*/


/* EJEMPLO 6

// Obtenemos el input por su ID
let inp = document.getElementById('nombreInput');

// Obtenemos el párrafo donde se mostrará el mensaje
let msj = document.getElementById('mensaje');

// Evento cuando el input recibe el foco (el cursor entra al campo)
inp.addEventListener('focus', () => {
  msj.textContent = 'Estás escribiendo...'; // Mostramos mensaje activo
});

// Evento cuando el input pierde el foco (el cursor sale del campo)
inp.addEventListener('blur', () => {
  msj.textContent = 'Has dejado de escribir'; // Mostramos mensaje pasivo
});

*/



/* EJEMPLO 7
// Seleccionamos el input por su ID
let inpu = document.getElementById('inputClase');

// Cuando el input recibe el foco (el usuario hace clic o tabula sobre él)
inpu.addEventListener('focus', () => {
  // Se agrega la clase 'focused' para aplicar estilos (por ejemplo, borde azul)
  inpu.classList.add('focused');
});

// Cuando el input pierde el foco (el usuario hace clic fuera del input)
inpu.addEventListener('blur', () => {
  // Se remueve la clase 'focused' para que vuelva a su estilo normal
  inpu.classList.remove('focused');
}); 
*/


/* EJEMPLO 8
let inputText = document.getElementById('campoTexto');

let contador = document.getElementById('numero');

let valor = 0

inputText.addEventListener('keydown',()=>{
  valor ++
contador.textContent = valor
}) */


/* EJEMPLO 8
const inputText = document.getElementById('textoUsuario');

const mensajeNv = document.getElementById('vistaPrevia');

inputText.addEventListener('input', ()=>{
mensajeNv.textContent = inputText.value;
})
*/
 
/*

const input1 = document.getElementById('nombre');

const input2 = document.getElementById('email');

const button = document.getElementById('enviar');

const paragraph = document.getElementById('mensaje')

button.addEventListener('click', ()=>{
  if (input1.value === '' || input2.value === ''){
    paragraph.textContent = 'error'

  }else {
    paragraph.textContent = 'bien hecho'
  }
}) */

/*

const funcion = ()=>{
  console.log('hola sensei')
}


funcion()

let hola = (otraFuncion)=>{
console.log( `buenos dias `)
otraFuncion()
}

hola(funcion)


let saludoBase = nombre => {
  let saludoInterno = () => {
    console.log( `un saludo par ami esposa amada ${nombre}`)
  }
  return saludoInterno
}


let llamarSaludo = saludoBase(' Miriam');

llamarSaludo()



let operacion = (a, b)=>{
  let sumar = (a, b) => {
console.log(a + b)
  }
  return operacion;
}

let sumaTotal = operacion(3, 3)


sumaTotal()



let saludar = () => {
  let mensaje = () => {
    console.log("⚡ Hola, Akuma.");
  };
return mensaje;
};

let saludoGuardado = saludar(); // Aquí la función interna se guarda
saludoGuardado()


let crearEco = (texto)=>{
  let ecoInterno = ()=>{
    
for(let i = 0; i < 3 ; i ++){
  console.log(texto);
  
}
  }
  return ecoInterno;
}

let mensajePerron = crearEco('guerraaaaaa perros');

mensajePerron()
*/

/*
let saludar = () => {
  let mensaje = () => {
    console.log("⚡ Hola, Akuma.");
  };
return mensaje;
  // TU MISIÓN: retorna la función 'mensaje' sin ejecutarla
};

let saludoGuardado = saludar(); // Guarda la función interna
 

saludoGuardado()
// TU MISIÓN: ahora ejecuta la función guardada


let crearAlerta = () => {
  let alerta = () => {
    console.log("🚨 ¡Atención, Akuma!");
  };
return alerta;
  // TU MISIÓN: retorna la función 'alerta' sin ejecutarla
};

let alertaGuardada = crearAlerta(); // Guarda la función interna
alertaGuardada()
// TU MISIÓN: ahora ejecuta la función guardada


let iniciarConteo = (inicio) => {
  let conteo = () => {
    for(let i = inicio; i < inicio + 7; i++){
      console.log(i);
    }
  };

  return conteo;
};

let conteoGuardado = iniciarConteo(5);
conteoGuardado()
// TU MISIÓN: ahora ejecuta la función guardada para que muestre el conteo





let iniciarConteo1 = (inicio) => {
  let conteo = () => {
    // TU MISIÓN: usa un bucle para imprimir en consola los números
    // desde 'inicio' hasta 'inicio + 2' (3 números en total)

    for  (let i = inicio; i < inicio+3 ; i++){
      console.log(i)
    }
  };
return conteo;
  // TU MISIÓN: retorna la función 'conteo' sin ejecutarla
};

let conteoGuardado1 = iniciarConteo1(5);
conteoGuardado1()
// TU MISIÓN: ejecuta la función guardada para que muestre el conteo



let prepararLista = (inicio) => {
  let mostrarLista = () => {
    // TU MISIÓN: usa un bucle para imprimir en consola los números
    // desde 'inicio' hasta 'inicio + 4' (5 números en total)

    for (i = inicio; i < inicio+5; i++){
      console.log(i)
    }
  };
return mostrarLista;
  // TU MISIÓN: retorna la función 'mostrarLista' sin ejecutarla
};

let listaGuardada = prepararLista(10);

listaGuardada()

// TU MISIÓN: ejecuta la función guardada para que muestre la lista



let generarMultiplicador = (num) => {
  let multiplicar = (factor) => {
    // TU MISIÓN: imprime en consola el resultado de 'num' multiplicado por 'factor'

    console.log(num * factor)
  };
  return multiplicar;

  // TU MISIÓN: retorna la función 'multiplicar' sin ejecutarla
};

let multiplicadorGuardado = generarMultiplicador(7);
multiplicadorGuardado(3)
// TU MISIÓN: ejecuta la función guardada pasando como argumento un número para multiplicar


let crearContador = (inicio) => {
  let contarHasta = (fin) => {
    // TU MISIÓN: usa un bucle para imprimir en consola los números
    // desde 'inicio' hasta 'fin' (ambos inclusive)

    for (let i = inicio; i <= fin ; i++)
      console.log(i)
  };
return contarHasta
  // TU MISIÓN: retorna la función 'contarHasta' sin ejecutarla
};

let contadorGuardado = crearContador(2);
contadorGuardado(10)
// TU MISIÓN: ejecuta la función guardada pasando un número mayor que 'inicio' para contar


function ejecutar(fn) {
  fn(); // Aquí se ejecuta la función recibida como parámetro
}

function saludar1() {
  console.log("Hola, Akuma");
}

ejecutar(saludar1);  */


/*
function saludar(nombre, callback) {
  console.log(`Hola, ${nombre}`);
  callback(nombre);
}

// Ejemplo de callback
function despedirse(nombre) {
  console.log(`Adiós, ${nombre}`);
}

// Probando
saludar("Akuma", despedirse);
*/

/*
let procesarNumero = (numero, callback)=>{
let multiplicacion = numero * 2;
callback(multiplicacion)
}

let cuenta = (numero)=>{
  console.log(`el resultado es ${numero} `)
}

procesarNumero(3, cuenta)


let cadenaTexto = (cadena, callback1)=>{
console.log(`esta es la ${cadena}`)
callback1(cadena)
}

let ctexto = (cadena)=>{
  console.log(`que dificil se esta poniendo ${cadena}`)
}

cadenaTexto('hola', ctexto)




let operarNumero = (numero, callback2)=>{
let numero1 = numero + 10;

console.log(`este es el numero ${numero}`)
callback2(numero1)
}

let callback3 = (numero1)=>{
  console.log(`me dule la cabeza sensei ${numero1}`)
}

operarNumero(1, callback3)

*/





let verificarEdad = (edad, callback)=>{
console.log(`esta es tu edad ${edad} por lo tanto`)
callback(edad)
}

let pruebaEdad = (edad)=>{
if (edad >= 18){
  console.log('acceso permitido')
}else{console.log('acceso denegado')}

}

verificarEdad(17, pruebaEdad)




let esPar = (number, callback)=>{
console.log(`este es tu numero  : ${number} `)
callback(number)
}

let seraPar = (numero)=>{
  if (numero % 2 !== 0){
    console.log(`este numero es el  ${numero} y es impar`)
  }else{
    console.log(`este numero es el ${numero} y es par`)
  }
}

esPar(3, seraPar)



function validarUsuario(usuario, callback) {
  console.log(`Validando al usuario: ${usuario}`);
  const usuarioValido = usuario.toLowerCase() === 'akuma';
  callback(usuarioValido);
}

function obtenerPermisos(valido, callback) {
  if (valido) {
    const permisos = ['leer', 'escribir', 'eliminar'];
    callback(permisos);
  } else {
    console.log('Usuario no válido. Acceso denegado.');
  }
}

function mostrarPermisos(permisos) {
  console.log(`Permisos concedidos: ${permisos.join(', ')}`);
}

// Ejecución
validarUsuario('Akuma', function(resultado) {
  obtenerPermisos(resultado, mostrarPermisos);
});





// Paso 1: Registrar usuario
function registrarUsuario(nombre, callback) {
  console.log(`Registrando al usuario: ${nombre}`);
  let usuario = { nombre: nombre, id: Date.now() };
  callback(usuario);
}

// Paso 2: Generar saludo
function generarSaludo(usuario, callback) {
  let saludo = `Hola, ${usuario.nombre}. Tu ID es ${usuario.id}.`;
  callback(saludo);
}

// Paso 3: Mostrar saludo final
function mostrarSaludoFinal(saludo) {
  console.log(saludo);
}

// Ejecución
registrarUsuario('Akuma', function(usuario) {
  generarSaludo(usuario, mostrarSaludoFinal);
});












function nuevoObjeto(nombre, precio, callback){
  console.log(`tu producto es ${nombre} con un costo antes de impuestos de ${precio}`)
  const nObjeto = {nombre:nombre, precio:precio, estado:'pendiente'}
  callback(nObjeto)
}

function descuentoAplicado(nObjeto, callback){
  let nPrecio = nObjeto.precio - (nObjeto.precio * 0.10) 
  console.log(nPrecio)
  nObjeto.estado = 'descuento aplicado'
  callback(nObjeto)
}

function resultadoFinal(nObjeto){
  console.log(`el producto ${nObjeto.nombre} tiene un costo de ${nObjeto.precio}`)
}


nuevoObjeto('Monitor 4K', 8000, function(nObjeto) {
  descuentoAplicado(nObjeto, resultadoFinal);
});







// Función que crea un nuevo objeto con el nombre y precio del producto
function nuevoObjeto(nombre, precio, callback) {
  // Mostramos el nombre del producto y su precio original
  console.log(`Tu producto es ${nombre} con un costo antes de impuestos de ${precio}`);

  // Creamos el objeto con las propiedades nombre, precio y un estado inicial 'pendiente'
  const nObjeto = { nombre: nombre, precio: precio, estado: 'pendiente' };

  // Ejecutamos el callback, pasándole el objeto recién creado para que continúe el flujo
  callback(nObjeto);
}

// Función que aplica un descuento al precio del producto
function descuentoAplicado(nObjeto, callback) {
  // Calculamos el nuevo precio con un descuento del 10%
  let nPrecio = nObjeto.precio - (nObjeto.precio * 0.10);

  // Mostramos el precio con el descuento aplicado
  console.log(`Precio con descuento: ${nPrecio}`);

  // Actualizamos el precio dentro del objeto
  nObjeto.precio = nPrecio;

  // Cambiamos el estado del objeto para indicar que ya tiene descuento
  nObjeto.estado = 'descuento aplicado';

  // Llamamos al siguiente callback, pasándole el objeto actualizado
  callback(nObjeto);
}

// Función final que muestra el resultado completo del producto con el precio actualizado
function resultadoFinal(nObjeto) {
  // Mostramos el nombre del producto y su precio final después del descuento
  console.log(`El producto ${nObjeto.nombre} tiene un costo final de ${nObjeto.precio}`);
}

// Iniciamos el flujo llamando a la primera función
// Le pasamos: nombre del producto, precio inicial y el primer callback (función anónima)
nuevoObjeto('Monitor 4K', 8000, function(nObjeto) {
  // Dentro del callback, llamamos a la función de descuento
  // Le pasamos el objeto y el callback final
  descuentoAplicado(nObjeto, resultadoFinal);
});


// Creamos la función que recibirá:
// 1. Un número
// 2. Un callback para cuando el número es par
// 3. Un callback para cuando el número es impar
function evaluarNumero(numero, callbackPar, callbackImpar) {

  // Verificamos si el número es par usando el operador módulo (%)
  if (numero % 2 === 0) { 
    // Si es par, ejecutamos el primer callback
    callbackPar(); 
  } else {
    // Si es impar, ejecutamos el segundo callback
    callbackImpar(); 
  }
}

// Llamamos a la función evaluarNumero
// Pasamos el número a evaluar: 7
// Pasamos como primer callback una arrow function que imprime "El número es par ✅"
// Pasamos como segundo callback una función clásica que imprime "El número es impar ❌"
evaluarNumero(7, 
  () => console.log('El número es par ✅'), // Este es el callback para cuando es par (arrow function)
  function() { console.log('El número es impar ❌'); } // Este es el callback para cuando es impar (función normal)
);





























function verificarUsuario(nombreUsuario, callbackCorrecto, callbackIncorrecto){
  if (nombreUsuario >= 10 ){
    callbackCorrecto(nombreUsuario)
  }else{callbackIncorrecto(nombreUsuario)}

}

verificarUsuario(15, (nombreUsuario)=>{console.log(`numero es mayor o igual a ${nombreUsuario} `)}, (nombreUsuario)=>{console.log(`como tu hiciste lo que quisiste yo tambien sensei  ${nombreUsuario}`)})




function descargarArchivo(nombreArchivo, callbackDescarga) {
  console.log(`Iniciando descarga de: ${nombreArchivo}`);
  setTimeout(() => {
    console.log(`Descarga completada: ${nombreArchivo}`);
    callbackDescarga(nombreArchivo, function(error, mensajeAnalisis) {
      if (error) {
        console.log(`Error en análisis: ${error}`);
      } else {
        console.log(`Análisis exitoso: ${mensajeAnalisis}`);
      }
    });
  }, 2000);
}

function analizarArchivo(nombreArchivo, callbackAnalizar) {
  console.log(`Analizando archivo: ${nombreArchivo}`);
  setTimeout(() => {
    if (nombreArchivo.length < 5) {
      callbackAnalizar("Archivo muy pequeño", null);
    } else {
      callbackAnalizar(null, "Archivo analizado correctamente");
    }
  }, 1000);
}

// Ejecutar proceso completo

descargarArchivo("miArchivo.txt", function(nombreArchivo, callbackAnalizar) {
  analizarArchivo(nombreArchivo, callbackAnalizar);
});