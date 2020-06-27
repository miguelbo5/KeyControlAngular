import { Component, OnInit } from '@angular/core';
import { Producto } from '../Models/producto';
import { ProductoService } from '../Services/producto.service';

@Component({
    selector: 'tienda',
    templateUrl: '../Views/tienda.component.html',
    styleUrls: ['../../assets/Css/tienda.component.css'],
    providers: [ProductoService]
})

export class TiendaComponent implements OnInit {

    public listadoProductos:Array<Producto>;

    constructor(private _productoService: ProductoService) { 

    }

    ngOnInit() {

        this.listadoProductos = this._productoService.getListadoProductos();
        console.log(this.listadoProductos);

    }
}