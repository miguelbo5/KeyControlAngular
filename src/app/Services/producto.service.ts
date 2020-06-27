import { Injectable } from "@angular/core";
import { Producto } from '../Models/producto';
import { ProductoComponent } from "../Components/producto.component";

@Injectable()
export class ProductoService{

    public listadoProductos:Array<Producto>;

    constructor(){

        this.listadoProductos = [

            new Producto("1", "Newskill Hanshi Spectrum", 201, "tec1.jpg", "Muy bueno", 45, true, false, true, "Newskill", true, false, "Cherry MX Blue"),
            new Producto("2", "Razer Huntsman", 90, "tec2.jpg", "Muy bueno", 56, false, false, false, "Razer", true, false,"Cherry MX Red"),
            new Producto("3", "Logitech G513", 80, "tec3.jpg", "Muy bueno", 8, true, true, true, "Logitech", false, true, "Cherry MX Green"),
            new Producto("4", "Razer BlackWidow 2019", 95, "tec4.jpg", "Muy bueno", 23, false, true, false, "Razer", true, true, "Cherry MX Black"),
            new Producto("5", "BG Gaming Raven", 120, "tec5.jpg", "Muy bueno", 4, false, false, true, "BG", true, false, "Cherry MX Red"),
            new Producto("6", "Ozone Strike X30", 75, "tec6.jpg", "Muy bueno", 40, false, true, false, "Ozone", false, false,"Cherry MX Red"),
            new Producto("7", "Ozone Strike Battle", 201, "tec7.jpg", "Muy bueno", 7, false, true, false, "Ozone", false, true,"Cherry MX Brown"),
            new Producto("8", "Corsair K63", 201, "tec8.jpg", "Muy bueno", 75, true, false, true, "Corsair", true, true,"Cherry MX Blue"),
            new Producto("9", "Corsair K63", 201, "tec9.jpg", "Muy bueno", 75, true, false, true, "Corsair", true, true,"Cherry MX Blue"),
            new Producto("10", "Corsair K63", 201, "tec10.jpg", "Muy bueno", 75, true, false, true, "Corsair", true, true,"Cherry MX Blue")
        
        ];

    }

    getSizeListadoProductos(){

        return this.listadoProductos.length;
    }

    getListadoProductos(){

        return this.listadoProductos;
    }
    
    setListadoProductos(listadoProductos){

        this.listadoProductos = listadoProductos;
    }

    addProducto(producto: Producto){

        this.listadoProductos.push(producto);
    }

    createProducto(id: string, nombre: string, precio: number, imagen: string, caracteristicas: string, vecesComprado: number, recomendado: boolean, oferta: boolean, mejorValorado: boolean, marcaTeclado: string, tecladoNumerico: boolean, inalambrico: boolean, tipoTeclas: string){

        let producto = new Producto(id, nombre, precio, imagen, caracteristicas, vecesComprado, recomendado, oferta, mejorValorado, marcaTeclado, tecladoNumerico, inalambrico, tipoTeclas);
        
        return producto;
    }

    readProducto(key, value){

        return this.listadoProductos.find(producto => producto[key] == value);

    }

    updateProducto(index, id, nombre, precio, imagen, caracteristicas, vecesComprado, recomendado, oferta, mejorValorado, marcaTeclado, tecladoNumerico, inalambrico, tipoTeclas){

        let producto = new Producto(id, nombre, precio, imagen, caracteristicas, vecesComprado, recomendado, oferta, mejorValorado, marcaTeclado, tecladoNumerico, inalambrico, tipoTeclas);
        this.listadoProductos[index] = producto;
    }

    deleteProducto(index){

        this.listadoProductos.splice(index, 1);
    }

}