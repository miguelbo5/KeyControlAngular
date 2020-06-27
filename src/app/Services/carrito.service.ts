import { Injectable } from "@angular/core";
import { Producto } from '../Models/producto';

@Injectable()
export class CarritoService {

    public listadoCarrito: Array<Producto>;

    constructor() {

        this.listadoCarrito = [

            new Producto("1", "Newskill Hanshi Spectrum", 201, "tec1.jpg", "Muy bueno", 45, true, false, true, "Newskill", true, false, "Cherry MX Blue"),
            new Producto("2", "Razer Huntsman", 90, "tec2.jpg", "Muy bueno", 56, false, false, false, "Razer", true, false,"Cherry MX Red"),
            new Producto("3", "Logitech G513", 80, "tec3.jpg", "Muy bueno", 8, true, true, true, "Logitech", false, true, "Cherry MX Green"),
            new Producto("2", "Razer Huntsman", 90, "tec2.jpg", "Muy bueno", 56, false, false, false, "Razer", true, false,"Cherry MX Red")

        ];

    }

    getSizeListadoProductosCarrito(){

        return this.listadoCarrito.length;

    }

    getListadoProductosCarrito(){

        return this.listadoCarrito;

    }

    addProductoCarrito(producto: Producto) {

        this.listadoCarrito.push(producto);

    }

    deleteProducto(index){

        this.listadoCarrito.splice(index, 1);
    }

}