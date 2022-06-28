class Usuario{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = []
        this.mascotas = []
    }
    getFullName = function(){
        console.log(`Mi nombre completo es ${this.nombre} ${this.apellido}`)
    }
    addMascota = function(mascota){
        this.mascotas.push(mascota)
    }
    countMascotas = function(){
        console.log(`Tengo ${this.mascotas.length} mascotas`);
    }
    addBook = function(libro,escritor){
        this.libros.push({nombre: libro, autor:escritor})
      
    }

    getBooks = function(){
        let NombreLibro = this.libros.map(function(element){
            return `${element.nombre}`
        })
        console.log(NombreLibro);
    }

}

//Datos de Usuario
usuario1 = new Usuario("Sebas", "Cardozo")
usuario1.addMascota("Perro");
usuario1.addMascota("Leon");
usuario1.addBook("100 años de soledad", "Garcia Marquez");
usuario1.addBook("Inteligencia emocional", "Daniel Goleman");

//Pruebas 
usuario1.getFullName()
usuario1.countMascotas()
usuario1.getBooks()