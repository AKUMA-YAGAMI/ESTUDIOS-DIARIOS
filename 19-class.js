////EJEMPLO N.1 /////////////////

// EJEMPLO MAS BASICO DE CLASS UN SOLO CLASS
class Producto  {
    constructor(nombre, precio, stock){
this.nombre = nombre;
this.precio =precio;
this.stock = stock;
    }
mostrarDetalle(){
    console.log(`Producto: ${this.nombre} | Precio: ${this.precio}  | Stock: ${this.stock} `)
}

}

const cpu = new Producto('cpu', 33000, 32)

// COLOCAMOS EL NOMBRE DE LA CONSTANTE Y EL METODO QUE QUEREMOS QUE RETORNE
cpu.mostrarDetalle()


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//EJEMPLO N.2


class Empleados{
    constructor(nombre, puesto, salario){
        this.nombre = nombre;
        this.puesto = puesto;
        this.salario = salario;
    }
    descripcion(){
console.log(`"${this.nombre} trabaja como ${this.puesto} y gana ${this.salario}"`)
    }
}


let juan = new Empleados('juan', 'programador', 123000)
juan.descripcion()

let pepe = new Empleados('pepe', 'programador', 223000)
pepe.descripcion()

let pedro = new Empleados('pedro', 'programador', 323000)
pedro.descripcion()

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//EJEMPLO N.3

class Producto1{
    constructor(nombre, precio, stock){
        this.nombre=nombre;
        this.precio=precio;
        this.stock=stock;
    }
    vender(cantidad){
        if (this.stock - cantidad >= 0){
            this.stock -= cantidad;
            return `"Venta realizada: ${cantidad} unidades de ${this.nombre}"`
        
        }else {
            return `"No hay stock suficiente de ${this.nombre}"`
        }
    }
}

let Mouse = new Producto1('Mouse', 350, 5)
console.log(Mouse.vender(2))

console.log(Mouse.vender(4))

















////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7

//EJEMPLO 4///////////AQUI YA UTILIZAMOS DOS CLASS

class Cliente1{
    constructor(nombre, correo){
        this.nombre = nombre,
        this.correo = correo
    }
    mostrarInfo(){
        console.log(`NOMBRE : ${this.nombre} | CORREO ${this.correo}`)
    }
}


let cliente11 = new Cliente1('Martin', 'casper@hotmail.com')

cliente11.mostrarInfo()

let cliente2 = new Cliente1('Enrique', 'akuma@hotmail.com')

cliente2.mostrarInfo()

class Suscripcion{
    constructor(cliente, tipo, precio){
        this.cliente = cliente
        this.tipo = tipo,
        this.precio = precio
    }
    detalle(){
      return  `${this.cliente.nombre} (${this.cliente.correo}) tiene una suscripción ${this.tipo} que cuesta $${this.precio}.`
    }
}


let suscr = new Suscripcion(cliente11,'anual', 9000)

console.log(suscr.detalle())


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//EJEMPLO 5

class Cliente{
    constructor(nombre, correo, activo){
        this.nombre = nombre,
        this.correo = correo,
        this.activo = activo
    }
    desactivarCuenta(){}
    imprimirClientes(){
        console.log(`${this.nombre} | ${this.correo} | ${this.activo}`)
    }
}

let cliente1 = new Cliente('Martin', 'casper.mata', true)

cliente1.imprimirClientes()


class Suscripcion1 {
    constructor(cliente ,tipo, precio){
        this.tipo = tipo,
        this.precio = precio
        this.cliente = cliente
    }
    esPremium(){
        return `${this.cliente.nombre} | ${this.cliente.correo} |${this.cliente.activo} |${this.tipo} |${this.precio}`
    }
    suscriBase(){
        return 
    }
}


let suscri = new Suscripcion1(cliente1, 'premium', 8000)

console.log(suscri.esPremium())


////////////////////////////////////////////////////////////////////////////////////////////////////
//ejemplo n.6 












1. Usuario
Propiedades: nombre, email, activo

Método: desactivarCuenta() → cambia activo a false

Método: mostrarInfo() → imprime nombre y email

2. Factura
Propiedades: usuario, monto, fecha

Método: resumenFactura() → imprime:
"El usuario NOMBRE (EMAIL) recibió una factura de $MONTO el FECHA"

Requisitos:
Crea una instancia de Usuario

Crea una factura asociada a ese usuario

Imprime el resumen




