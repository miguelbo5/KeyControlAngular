import { Component, OnInit } from '@angular/core';
import { Producto } from '../Models/producto';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { CarritoService } from '../Services/carrito.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'carrito',
    templateUrl: '../Views/carrito.component.html',
    styleUrls: ['../../assets/Css/carrito.component.css'],
    providers: [CarritoService]
})

export class CarritoComponent implements OnInit {

    public listadoProductosCarrito:Array<Producto>;
    public producto:Producto;
    public precioListado: number;

    faTimes = faTimes;

    constructor(private _route:ActivatedRoute, private _router:Router, private _productoService: CarritoService) {}

    ngOnInit() { 

        this.listadoProductosCarrito = this._productoService.getListadoProductosCarrito();
        
        this.precioListado = this.getPrecioTotalListado();
    }

    public borrarProducto(index){

        this._productoService.deleteProducto(index);

        this.precioListado = this.getPrecioTotalListado();

    }

    getPrecioTotalListado():number{

        var precioTotal:number;

        precioTotal = 0;

        for(let prod of this.listadoProductosCarrito){

            precioTotal  += prod.getPrecio();

        }

        return precioTotal;

    }

}