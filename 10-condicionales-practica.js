let name = 'martin'
let password = 'lanfan'
let eMail = 'kasper@ste3am.com'


if (name == 'martin'){
    console.log( `hola ${name}`)
}


if (name == 'martin' && eMail == 'kasper@steam.com' ){
    console.log( `hola ${name} this is your new mail ${eMail}`)
}else{
    console.log ('wrong mail try again')
}

let numero = 99

if (numero%2 == 0){
    console.log('par')
} else if (numero == 0){
    console.log(0)
}else if (numero < 0){
    console.log('negativo')
}else if (numero%2 >= 1){
    console.log('impar')
}


let edadVoto = 19

if (edadVoto >= 18){
    console.log('ya puedes votar pa')
}else if (edadVoto < 18)
    console.log( `aun no puedes votar te faltan ${18-edadVoto} años mas pa`)

    
    
    
    
    let eresAdulto = true

    eresAdulto ? console.log('no tomes tanta mierda') : console.log('largate niño')



    let mes = 'julio'

    if (mes == 'enero' || mes == 'febrero' || mes == 'marzo' ){
        console.log('invierno')
    } else if (mes == 'abril' || mes == 'mayo' || mes == 'junio'){
        console.log('primavera')
    } else if (mes == 'julio' || mes == 'agosto' || mes == 'septiembre'){
        console.log('otoño')
    } else if (mes == 'octubre' || mes == 'noviembre' || mes == 'diciembre'){
        console.log('verano')
    }


let mesEpoca = 'enero'

let temporada

switch (mesEpoca) {
    case 'enero':
        temporada = 'invierno'
        pisto = 8*8
        break;
        case 'febrero':
            temporada = 'verano'
            break;
    

    default:
        temporada = 'mal mal'
        break;
}

console.log(temporada, pisto)


