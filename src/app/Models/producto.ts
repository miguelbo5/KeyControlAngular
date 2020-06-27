export class Producto {

    constructor(
        public id: string,
        public nombre: string,
        public precio: number,
        public imagen: string,
        public caracteristicas: string,
        public vecesComprado: number,
        public recomendado: boolean,
        public oferta: boolean,
        public mejorValorado: boolean,
        public marcaTeclado: string,
        public tecladoNumerico: boolean,
        public inalambrico: boolean,
        public tipoTeclas: string
    ) { };

    getId() {

        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getNombre() {

        return this.nombre;
    }

    setNombre(nombre) {

        this.nombre = nombre;
    }

    getPrecio() {

        return this.precio;
    }

    setPrecio(precio) {

        this.precio = precio;
    }

    getImagen() {

        return this.imagen;
    }

    setImagen(imagen) {

        this.imagen = imagen;
    }

    getVecesComprado(){

        return this.vecesComprado;
    }

    setVecesComprado(vecesComprado){

        this.vecesComprado = vecesComprado;
    }

    getRecomendado(){

        return this.recomendado;
    }

    setRecomendado(recomendado){

        this.recomendado = recomendado;
    }

    getOferta(){

        return this.oferta;
    }

    setOferta(oferta){

        this.oferta = oferta;
    }

    getMejorValorado(){

        return this.mejorValorado;
    }

    setMejorValorado(mejorValorado){

        this.mejorValorado = mejorValorado;
    }

    getMarcaTeclado(){

        return this.marcaTeclado
    }

    setMarcaTeclado(marcaTeclado){

        this.marcaTeclado = marcaTeclado;
    }

    getTecladoNumerico(){

        return this.tecladoNumerico;
    }

    setTecladoNumerico(tecladoNumerico){

        this.tecladoNumerico = tecladoNumerico;
    }

    getInalambrico(){

        return this.inalambrico;
    }

    setInalambrico(inalambrico){

        this.inalambrico = inalambrico;
    }

    getTipoTeclas(){

        return this.tipoTeclas;
    }

    setTipoTeclas(tipoTeclas){

        this.tipoTeclas = tipoTeclas;
    }
}