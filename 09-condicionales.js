// IF AND ELSE 

let age = 18 || age > 18

age = 18


if (age == 18 || age > 18 ){
    console.log(`tu edad es ${age} puedes entrar`)
}else if (age < 18 ) 
    { console.log('LARGATE')
} else{
    console.log('te pedi edad bestia')
}


//OPERADORES TERNARIOS

const message = age == 18 ? `la edad es ${age}` : 'la edad no es 37'

console.log(message)

//SWITCH



let day = 5
let dayName


switch (day) {
    case 0:
        dayName = 'lunes'
        break
            case 1:
        dayName = 'martes'
        break
            case 2:
        dayName = 'miercoles'
        break
            case 3:
        dayName = 'jueves'
        break
            case 4:
        dayName = 'viernes'
        break

        default :
        dayName = 'maaaaaaaaaaaal'
}

console.log(dayName)