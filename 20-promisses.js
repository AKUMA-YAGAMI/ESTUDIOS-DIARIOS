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