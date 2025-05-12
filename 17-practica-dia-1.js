
/*


function fizzBuzzLoop() {
    for( let i = 1;i <= 20 ; i++){
      
    if (i % 3 === 0 && i%5 === 0){
        console.log("fizzbuzz")}
   else if (i % 3 === 0){ console.log("fizz")}
    else if (i % 5 === 0){console.log("buzz")}
 
    else {console.log(i)}
    }}


fizzBuzzLoop() */
/*

for(let e = 10; e >=1;e-- ){
  if(e % 2 ===0){
    console.log(` ${e} es numero par`)
  }
  else if( e%2 !== 0){
    console.log(` ${e} es numero impar`)
  }
  else{console.log(e)}
}
*/

/*
function rectangulo(a, b){
  return a * b
}

console.log(`el area del rectangulos es  ${rectangulo(8, 8)} m2`)


const libro = {
  nombre: 'el señor de los elotes',
  autor : 'Akuma',
  año: '1990',
  resumen: function(){
    console.log(`ESTE LIBRO SE TITULA ${this.nombre.toUpperCase()} su autor es el mismisimo ${this.autor.toUpperCase()} y fue publicado en el año de ${this.año}`)
  }

}

libro.resumen()







const usuario ={
  nombre:'casper',
  email: 'yomero@hot.com',
  activo: true,
  login: function(){
    console.log(`usuario ${this.nombre} a iniciado sesion`)
  },
  logout: function(){
    console.log(`usuario ${this.nombre} a cerrado sesion`)
  }
}

usuario.activo = false


usuario.login()

usuario.logout()
*/



/*Crea una función que imprima los números del 1 al 20, pero:

Si el número es divisible por 3, imprime "Fizz".

Si es divisible por 5, imprime "Buzz".

Si es divisible por ambos, imprime "FizzBuzz".*/

/*

const plataformaCurso = {
  nombre: 'caspermata',
  cursos:[
    {titulo:'java', duracion: 10, completado:true},
    {titulo:'java1', duracion: 20, completado:true},
    {titulo:'java2', duracion: 30, completado:true}
  ],
  mostrarCurso(){
    console.log(this.cursos)
  },
  agregarCurso(nuevoCurso) {
    this.cursos.push(nuevoCurso);
  }
}




plataformaCurso.agregarCurso({titulo:'perro', duracion:33})

plataformaCurso.mostrarCurso()



*/

/*




const tienda = {
  inventario: [],
  agregarproducto(nombre, precio, cantidad){
    this.inventario.push(nombre, precio, cantidad)
  }
}

tienda.agregarproducto('perro','gato','perro')

console.log(tienda.inventario)



const escuela = {
  estudiantes:[],
  agregarEstudiantes(nombre, edad, curso){
const nuevoestudi = {
  nombre:nombre,
  edad:edad,
  curso:curso,
  
}
escuela.estudiantes.push(nuevoestudi)


  }
}

escuela.agregarEstudiantes('carlos', 33, 'ingles')
escuela.agregarEstudiantes('pepe', 13, 'ingles')
escuela.agregarEstudiantes('pependejo', 43, 'ingles')

console.log(escuela.estudiantes)


*/


/*

const escuela = {
  estudiantes:[],
  agregarEstudiantes(nombre, edad, curso){
    const nuevoEstudiante = {
      nombre:nombre,
      edad:edad,
      curso:curso
    }
    this.estudiantes.push(nuevoEstudiante)
    for (cono of escuela.estudiantes){
      if (cono ===' martin'){console.log(`este es el nuevo estudiante favorito${escuela.estudiantes.nombre} ${escuela.estudiantes.edad} ${escuela.estudiantes.curso} `)}
    }
  },
  
  
}



escuela.agregarEstudiantes('martin', 35, 'fisica')

console.log(escuela.estudiantes)


*/










/*


const escuela ={
  estudiantes:[],
  agregarEstudiante(nombre, edad, curso){
    const nuevoEstudiante ={
      nombre:nombre,
      edad:edad,
      curso:curso
    }
    this.estudiantes.push(nuevoEstudiante)
  },
  expulsarEstudiante(nombre){
    this.estudiantes.splice(nombre)
    if(nombre !== nombre){
console.log('estudiante no encontrado')
    }
    }
  }



  escuela.agregarEstudiante('lucas', 20, 'historia');
  escuela.agregarEstudiante('ana', 22, 'biología');

  console.log(escuela.estudiantes)

escuela.expulsarEstudiante('pepe')
*/
/*

const academia ={
  alumnos:[],
  inscribirAlumnos(nombre, edad){
    const newEstudent = {
      nombre:nombre,
      edad:edad

    }
    this.alumnos.push(newEstudent)
  },
  mostrarAlumnos(){
    let encontrarA = this.alumnos.map(function num(){
      console.log(academia.alumnos)
    })
  }
}

academia.inscribirAlumnos('martin', 35)
console.log(academia.alumnos)


academia.mostrarAlumnos()*/
/*
const biblioteca ={
libros:[],
agregarLibro(titulo, año, autor){
  const newBook = {
    titulo:titulo,
    año:año,
    autor:autor
  }
  this.libros.push(newBook)
},
mostrarLibros(){
  this.libros.forEach(function perro(libro){
    console.log(libro.titulo)
    console.log(libro.año)
    console.log(libro.autor)
  })
},

}


biblioteca.agregarLibro('casper', 1990, 'esther y martin')
biblioteca.agregarLibro('per', 190, 'esther')
biblioteca.agregarLibro('caer', 990, '  martin')

biblioteca.mostrarLibros()

*/
/*

const veterinaria = {
  mascotas:[],
  registrarMascota(nombre, especie, edad){
    const registro ={
      nombre:nombre,
      especie:especie,
      edad:edad
    }
    this.mascotas.push(registro)
  },
  mostrarMascotas(){
    this.mascotas.forEach(function (mascota){
      console.log(`el nombre de esta mascota es ${mascota.nombre} especie ${mascota.especie} y su edad es ${mascota.edad}`)
    })
    
  }
}


veterinaria.registrarMascota('lolo', 'perro', 50)
veterinaria.registrarMascota('lolo', 'perro', 90)
veterinaria.registrarMascota('lolo', 'perro', 70)

console.log(veterinaria.mascotas)
veterinaria.mostrarMascotas()
*/

const frutas = ['manzana', 'pera', 'platano']

function buscadorFrutas(nombre){
  const encontrada = frutas.find(function(fruta){
    return fruta === nombre
  });
  if (encontrada) {
    console.log(`Fruta encontrada: ${encontrada}`);
  } else {
    console.log("Fruta no encontrada");
  }
  }

  buscadorFrutas("pera");    // Fruta encontrada: pera
  buscadorFrutas("kiwi");








