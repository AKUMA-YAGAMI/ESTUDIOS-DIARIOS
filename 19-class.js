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

class Usuario {
    constructor (nombre, email, activo){
        this.nombre = nombre,
        this.email = email,
        this.activo = activo
    }
    desactivarCuenta(){
        this.activo = false
    }
    mostrarInfo(){
        console.log( `nombre : ${this.nombre} | email : ${this.email} | activo : ${this.activo}`)
    }
}

const newtraba = new Usuario('martin', 'arq@gmaail.com', true)

newtraba.mostrarInfo()

class Factura {
    constructor(usuario, monto, dia){
        this.usuario = usuario,
        this.monto = monto,
        this.dia = dia
    }
    resumenFactura(){
return `El joven ${this.usuario.nombre} (${this.usuario.email}) recibió una factura de $${this.monto} el dia ${this.dia} de abril`
}
}


const factura = new Factura(newtraba, 8000, 8)

console.log(factura.resumenFactura())

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7
///EJEMPLO N.7 

class ClienteHotel {
constructor(nombre, documento, tieneRes){
    this.nombre = nombre,
    this.documento = documento,
    this.tieneRes = tieneRes
}
cancelarReserva(){
    this.tieneRes = false
}
mostrarCliente(){
    return `nombre : ${this.nombre} | documento: ${this.documento} | reservacion : ${this.tieneRes}`
}
}

class ReservaHotel{
    constructor(clienteHotel, habitacion, dias){ //aqui colocamos en el constructor el nombre de la primer class para poder acceder a sus valores
this.clienteHotel = clienteHotel,
this.habitacion = habitacion,
this.dias = dias
    }
    detalleReserva(){
      console.log ( `El cliente ${this.clienteHotel.nombre} (${this.clienteHotel.documento}) tiene reservada la habitación ${this.habitacion} por ${this.dias} días.`)
    }
}


const rese = new ClienteHotel('martin', 'id:3213123', true) // creamos una nueva instacia en la primer class

console.log(rese.mostrarCliente()) //mandamos a imprimir la informacion con el nombre de la const y el metodo que creamos

const newrese = new ReservaHotel(rese, 454, 6) //aqui generamos la resrvacion con la instacia creada y despues llenando los demas parametros

newrese.detalleReserva()//aqui mandamos a llamar la const que reservo con los datos extras de la class anterior


rese.cancelarReserva()  //aqui mandamos a llamar a la funcion que nos cambia el boolean de true que teniamos a false asi cancelamos
console.log(rese.mostrarCliente()) //llamamos la info del cliente


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7
///EJEMPLO N.8
class Empleado11 {
    constructor(nombre, salarioBase) {
      this.nombre = nombre;
      this.salarioBase = salarioBase;
    }
  
    calcularSalarioConBono(bonoPorcentaje) {
      const bono = this.salarioBase * (bonoPorcentaje / 100);
      return this.salarioBase + bono;
    }
  }
  
  // Prueba
  const empleado111 = new Empleado11("Mariana", 12000);
  console.log(`Salario con bono: $${empleado111.calcularSalarioConBono(20)}`);


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7
///EJEMPLO N.9


// Clase que representa un libro individual
class Libro {
    constructor(titulo, autor) {
      this.titulo = titulo;
      this.autor = autor;
      this.disponible = true; // Por defecto todo libro está disponible al crearse
    }
  
    prestar() {
      this.disponible = false; // Se cambia el estado del libro a prestado
    }
  
    devolver() {
      this.disponible = true; // Se cambia el estado del libro a disponible
    }
  }
  
  // Clase que representa una biblioteca con una lista de libros
  class Biblioteca {
    constructor() {
      this.listaDeLibros = []; // Se inicia el array vacío
    }
  
    agregarLibro(libro) {
      this.listaDeLibros.push(libro); // Se agrega un objeto tipo Libro al array
    }
  
    prestarLibro(titulo) {
      // Usamos .find() para buscar UN SOLO libro cuyo título coincida
      const libro = this.listaDeLibros.find(lib => lib.titulo === titulo);
  
      // Si lo encontró y está disponible, lo prestamos
      if (libro && libro.disponible) {
        libro.prestar();
        console.log(`Prestaste: ${libro.titulo}`);
      } else {
        // Si no lo encontró o ya está prestado
        console.log("No se puede prestar. Ya fue prestado o no existe.");
      }
    }
  
    listarLibrosDisponibles() {
      // Usamos .filter() para obtener SOLO los libros cuyo estado sea disponible
      const disponibles = this.listaDeLibros.filter(libro => libro.disponible);
  
      // Mostramos los títulos disponibles
      console.log(" Libros disponibles:");
      disponibles.forEach(lib => {
        console.log(`- ${lib.titulo} de ${lib.autor}`);
      });
    }
  }
  
  // 🧪 Pruebas
  const biblioteca = new Biblioteca();
  
  // Creamos algunos libros
  const libro1 = new Libro("El principito", "Antoine de Saint-Exupéry");
  const libro2 = new Libro("Cien años de soledad", "Gabriel García Márquez");
  
  // Los agregamos a la biblioteca
  biblioteca.agregarLibro(libro1);
  biblioteca.agregarLibro(libro2);
  
  // Mostramos los libros disponibles
  biblioteca.listarLibrosDisponibles();
  
  // Prestamos uno
  biblioteca.prestarLibro("El principito");
  
  // Volvemos a mostrar los disponibles
  biblioteca.listarLibrosDisponibles();
  
  // Devolvemos el libro
  libro1.devolver();
  
  // Mostramos nuevamente los disponibles
  biblioteca.listarLibrosDisponibles();



  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7
///EJEMPLO N.10


/*


class Tarea{
constructor(nombre, descripcion, completada){
    this.nombre = nombre,
    this.descripcion = descripcion,
    this.completada = false
}
completar(){
    this.completada = true
}


}


class Proyecto{
    constructor(titulo, tareas){
        this.titulo = titulo,
        this.tareas = []

    }
    agregarTarea(tarea){
        this.tareas.push(tarea)
    }
    mostraTareaspendientes(){
       return this.tareas.filter(tarea=> !tarea.completada)
    }
    buscarTarea(nombre) {
        return this.tareas.find(tarea => tarea.nombre === nombre);
}
}


//  Crear una instancia de Proyecto
const proyecto = new Proyecto('Proyecto Dominar Clases');

//  Crear tareas
const tarea1 = new Tarea('lavar', 'Lavar los platos', false);
const tarea2 = new Tarea('limpiar', 'Limpiar el piso', false);

//  Agregar tareas al proyecto
proyecto.agregarTarea(tarea1);
proyecto.agregarTarea(tarea2);

//  Completar una tarea
tarea1.completar();

//  Mostrar tareas pendientes
console.log('Tareas pendientes:', proyecto.mostrarTareasPendientes());

//  Buscar una tarea por nombre
console.log('Buscar tarea:', proyecto.buscarTarea('limpiar'));
*/


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7
///EJEMPLO N.10

// Clase que representa a un empleado de la empresa
class Empleado {
    constructor(nombre, puesto, departamento, activo = true) {
      this.nombre = nombre;
      this.puesto = puesto;
      this.departamento = departamento;
      this.activo = activo; // valor por defecto true
    }
  
    despedir() {
      this.activo = false;
    }
  }
  
  // Clase que representa a la empresa que gestiona empleados
  class Empresa {
    constructor(nombre) {
      this.nombre = nombre;
      this.listaDeEmpleados = []; // No es necesario pasar por parámetro
    }
  
    // ✅ Método para agregar un solo empleado
    agregarEmpleado(empleado) {
      this.listaDeEmpleados.push(empleado);
    }
  
    // 🔴 Error corregido: Usabas "=" en lugar de "===", y comparabas mal
    // ✅ Se busca un empleado por nombre usando 'find'
    buscarEmpleado(nombre) {
      return this.listaDeEmpleados.find(emp => emp.nombre === nombre);
      // 🔎 Usamos find porque queremos el PRIMER empleado que coincida con el nombre
    }
  
    // ✅ Filtramos empleados activos usando filter
    empleadosActivos() {
      return this.listaDeEmpleados.filter(emp => emp.activo);
      // 🔍 Usamos filter porque queremos todos los empleados cuyo estado es true
    }
  
    // ✅ Mostrar lista de empleados formateada
    listarEmpleados() {
      this.listaDeEmpleados.forEach(emp => {
        console.log(`${emp.nombre} | ${emp.puesto} | ${emp.departamento}`);
      });
      // 🔁 forEach se usa para recorrer y mostrar sin necesidad de return
    }
  }
  
  // 💡 Instancias de empleados
  const empleado1 = new Empleado('Jesús1', 'Supervisor', 'Cocina');
  const empleado2 = new Empleado('Jesús2', 'Asistente', 'Bar');
  const empleado3 = new Empleado('Jesús3', 'Chef', 'Cocina');
  
  // 💡 Instancia de empresa
  const miEmpresa = new Empresa('Restaurante Legendario');
  
  // ✅ Agregamos los empleados uno por uno
  miEmpresa.agregarEmpleado(empleado1);
  miEmpresa.agregarEmpleado(empleado2);
  miEmpresa.agregarEmpleado(empleado3);
  
  // ✅ Mostramos la lista de empleados
  console.log("📋 Lista de empleados:");
  miEmpresa.listarEmpleados();
  
  // ✅ Buscamos un empleado
  const encontrado = miEmpresa.buscarEmpleado('Jesús2');
  console.log("🔎 Empleado encontrado:", encontrado);
  
  // ✅ Obtenemos lista de empleados activos
  const activos = miEmpresa.empleadosActivos();
  console.log("✅ Empleados activos:", activos);
  
  // 🔥 Despedimos a uno y probamos de nuevo
  empleado2.despedir();
  console.log("✅ Empleados activos tras despido:");
  console.log(miEmpresa.empleadosActivos());


  
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7
///EJEMPLO N.11

class Auto{
    constructor(marca, encendido){
        this.marca = marca,
        this.encendido = false
    }
encender(){
    this.encendido = true
}


}

const newcar1 = new Auto( 'volvo', false)

newcar1.encender()
console.log(newcar1)


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7
///EJEMPLO N.12

class nuevoProducto{
    constructor(nombre, precio, disponible){
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = true
    }
    marcarNoDisponible(){
        this.disponible = false
    }
}

class Tiendita{
    constructor(nombre){
        this.nombre = nombre;
        this.inventario = []
    }
agregarProducto(producto){
    this.inventario.push(producto);
}
marcarProductoNoDisponible(nombre){
    const producto = this.inventario.find(p => p.nombre === nombre);
    if (producto) {
        producto.marcarNoDisponible();
   }};

mostrarDisponibles(){
    return this.inventario.filter(dis => dis.disponible === true)
}


}

const nwTiendita = new Tiendita()


const bimbo1 = new nuevoProducto('agua', 50, true)
const bimbo2 = new nuevoProducto('pan', 30, true)
const bimbo3 = new nuevoProducto('chela', 40, true)

nwTiendita.agregarProducto(bimbo1)
nwTiendita.agregarProducto(bimbo2)
nwTiendita.agregarProducto(bimbo3)

bimbo2.marcarNoDisponible()
nwTiendita.marcarProductoNoDisponible('agua')

console.log(nwTiendita.mostrarDisponibles())

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7
///EJEMPLO N.13

class Producto22 {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = true;
    }

    marcarNoDisponible() {
        this.disponible = false;
    }
}

class Catalogo22 {
    constructor() {
        this.listaProductos = [];
    }

    agregarProducto(producto) {
        this.listaProductos.push(producto);
    }

    mostrarDisponibles() {
        return this.listaProductos.filter(pro => pro.disponible);
    }

    preciosConIVA() {
        return this.listaProductos
            .filter(pro => pro.disponible)
            .map(pro => `nombre: ${pro.nombre} | precio: $${(pro.precio * 1.16).toFixed(2)}`);
    }
}

// Instanciamos el catálogo
const catalogo = new Catalogo22();

// Creamos productos
const coca = new Producto22('Coca-Cola', 22);
const sprite = new Producto22('Sprite', 18);
const fanta = new Producto22('Fanta', 20);

// Agregamos productos al catálogo
catalogo.agregarProducto(coca);
catalogo.agregarProducto(sprite);
catalogo.agregarProducto(fanta);

// Mostramos los precios con IVA solo de productos disponibles
console.log(catalogo.preciosConIVA());

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7
///EJEMPLO N.14