export class Pedido {

    constructor(
        public emailCliente: string,
        public productoComprado: string,
        public direccionEnvio: string,
        public precioTotal: number,
        public metodoPago: string

    ) { };

    getEmailCliente() {
        return this.emailCliente;
    }

    setEmailCliente(emailCliente) {
        this.emailCliente = emailCliente;
    }

    getProductoComprado() {
        return this.productoComprado;
    }

    setProductoComprado(productoComprado) {
        this.productoComprado = productoComprado;
    }

    getDireccionEnvio() {
        return this.direccionEnvio;
    }

    setDireccionEnvio() {
        this.direccionEnvio = this.direccionEnvio;
    }

    getPrecioTotal() {
        return this.precioTotal;
    }

    setPrecioTotal(precioTotal) {
        this.precioTotal = precioTotal;
    }

    getMetodoPago() {
        return this.metodoPago;
    }

    setMetodoPago() {
        this.metodoPago = this.metodoPago;
    }
}