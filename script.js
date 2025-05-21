/*
////////////////////EJEMPLO 1

const buttonCha = document.getElementById('button')
const pNew = document.getElementById('paragraph')



buttonCha.addEventListener('click',()=>{
    pNew.textContent = 'esto no lo vimos sensei ni como enlasar un script ni nada de nada jajaj me mandaste a la guerr sin fusil pero creo lo logre'
})
*/


////////////////////EJEMPLO 2
/*
const inputNombre = document.getElementById('nombreInput');
const botonRegistrar = document.getElementById('registrarBtn');
const listaUsuarios = document.getElementById('listaUsuarios');

const usuariosRegistrados = [];

botonRegistrar.addEventListener('click', () => {
  const nombre = inputNombre.value.trim();

  // Validación básica
  if (nombre === '') {
    alert('Por favor, escribe un nombre válido.');
    return;
  }

  // Evitar duplicados
  if (usuariosRegistrados.includes(nombre.toLowerCase())) {
    alert('Este usuario ya fue registrado.');
    return;
  }

  // Guardar y mostrar
  usuariosRegistrados.push(nombre.toLowerCase());

  const nuevoItem = document.createElement('li');
  nuevoItem.textContent = nombre;
  listaUsuarios.appendChild(nuevoItem);

  inputNombre.value = ''; // Limpiar input
});   */


/*
////////////////////EJEMPLO 3
let par3 = document.getElementById('par3');
let button3 = document.getElementById('button3');

button3.addEventListener('click', () => {
  if (par3.textContent === 'cambia de color') {
    par3.textContent = 'Texto actualizado';
    par3.style.color = 'green';
    button3.style.backgroundColor = 'green';
    button3.style.color = 'white';
  } else {
    par3.textContent = 'cambia de color';
    par3.style.color = 'black';
    button3.style.backgroundColor = 'black';
    button3.style.color = 'white';
  }
}); */

////////////////////EJEMPLO 4



