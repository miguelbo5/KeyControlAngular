export class Cliente{

    constructor(
        public nombre:string,
        public apellidos:string,
        public email:string,
        public fecha:Date,
        public direccion:string

    ){};

    getNombre(){
        return this.nombre;
    }

    setNombre(nombre){
        this.nombre = nombre;
    }

    getApellidos(){
        return this.apellidos;
    }

    setApellidos(apellidos){
        this.apellidos = apellidos;
    }

    getEmail(){
        return this.email;
    }

    setEmail(email){
        this.email = email;
    }

    getFecha(){
        return this.fecha;
    }

    setFecha(fecha){
        this.fecha = fecha;
    }

    getDireccion(){
        return this.direccion;
    }

    setDireccion(direccion){
        this.direccion = direccion;
    }
    
}