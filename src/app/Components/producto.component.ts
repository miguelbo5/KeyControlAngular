import { Component, OnInit } from '@angular/core';
import { Producto } from '../Models/producto';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ProductoService } from '../Services/producto.service';

@Component({
    selector: 'producto',
    templateUrl: '../Views/producto.component.html',
    styleUrls: ['../../assets/Css/producto.component.css'],
    providers: [ProductoService]
})

export class ProductoComponent implements OnInit {

    public listadoProductos:Array<Producto>;
    public parametro;
    public producto:Producto;

    constructor(private _route:ActivatedRoute, private _router:Router, private _productoService: ProductoService) {

    }
    
    ngOnInit() {

        this._route.params.forEach((params:Params) =>{

            this.parametro = params['id'];
            
        });

        this.producto = this._productoService.readProducto('id', this.parametro);

    }

}