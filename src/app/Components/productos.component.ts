import { Component, OnInit } from '@angular/core';
import { Producto } from '../Models/producto';
import { ProductoService } from '../Services/producto.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'productos',
    templateUrl: '../Views/productos.component.html',
    styleUrls: ['../../assets/Css/productos.component.css'],
    providers: [ProductoService]
})

export class ProductosComponent implements OnInit {
    
    public listadoProductos:Array<Producto>;

    public formulario = {nombre: '', precio: '', caracteristicas: '', marca: '', tecladoNumerico: '', inalambrico: '', tipoTeclas: ''};

    faTrash = faTrash;
    faPencil = faPencilAlt;

    constructor(private _productoService: ProductoService) { 

    }

    ngOnInit() { 
        this.listadoProductos = this._productoService.getListadoProductos();
        console.log(this.listadoProductos);
    }


    public insertarProducto(){

        let producto: Producto;

        let numeroId = this._productoService.getSizeListadoProductos() + 1 + "";
        
        let imagen = "tec1.jpg";

        let precioNumber : number 
        
        precioNumber = Number.parseFloat(this.formulario.precio);

        let vecesComprado = (Math.random()*90).toFixed(0);

        let tecladoNumericoBoolean: boolean;

        if(this.formulario.tecladoNumerico == "true"){
            tecladoNumericoBoolean = true;
        }else{
            tecladoNumericoBoolean = false;
        }

        let inalambricoBoolean: boolean;

        if(this.formulario.inalambrico == "true"){
            inalambricoBoolean = true;
        }else{
            inalambricoBoolean = false;
        }

        producto = this._productoService.createProducto(numeroId, this.formulario.nombre, precioNumber, imagen, this.formulario.caracteristicas, 
            Number.parseInt(vecesComprado), true, true, true, this.formulario.marca, tecladoNumericoBoolean, inalambricoBoolean, this.formulario.tipoTeclas)

        this._productoService.addProducto(producto);

    }

    public borrarProducto(index){

        this._productoService.deleteProducto(index);

    }

    public editarProducto(index){



    }

}