
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




