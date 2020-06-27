import { Component, OnInit } from '@angular/core';
import { Cliente } from '../Models/cliente';
import { Pedido } from '../Models/pedido';
import { Producto } from '../Models/producto';
import { ProductoService } from '../Services/producto.service';
import { ClienteService } from '../Services/cliente.service';
import { PedidoService } from '../Services/pedido.service';

@Component({
    selector: 'informes',
    templateUrl: '../Views/informes.component.html',
    styleUrls: ['../../assets/Css/informes.component.css'],
    providers: [PedidoService, ProductoService, ClienteService]
})

export class InformesComponent implements OnInit {
    
    public listadoClientes:Array<Cliente>;
    public listadoProductos:Array<Producto>;
    public listadoPedidos:Array<Pedido>;

    constructor(private _pedidoService: PedidoService, private _productoService: ProductoService, private _clienteService: ClienteService) { 

    }

    ngOnInit() { 

        this.listadoPedidos = this._pedidoService.getListadoPedidos();
        this.listadoClientes = this._clienteService.getListadoClientes();
        this.listadoProductos = this._productoService.getListadoProductos();

    }
}