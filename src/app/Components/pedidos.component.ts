import { Component, OnInit } from '@angular/core';
import { Pedido } from '../Models/pedido';
import { PedidoService } from '../Services/pedido.service';

@Component({
    selector: 'pedidos',
    templateUrl: '../Views/pedidos.component.html',
    styleUrls: ['../../assets/Css/pedidos.component.css'],
    providers: [PedidoService]
})

export class PedidosComponent implements OnInit {
    
    public listadoPedidos:Array<Pedido>;

    public formulario = {emailCliente: '', productoComprado: '', direccion: '', metodoPago: ''};

    constructor(private _pedidoService: PedidoService) { 

    }

    ngOnInit() { 

        this.listadoPedidos = this._pedidoService.getListadoPedidos();

    }

    public insertarPedido(){

        let pedido: Pedido;

        let precioRandom = (Math.random()*90)+1;

        pedido = this._pedidoService.createPedido(this.formulario.emailCliente, this.formulario.productoComprado, this.formulario.direccion, precioRandom.toFixed(2), this.formulario.metodoPago);
        
        this._pedidoService.addPedido(pedido);

    }

    public borrarPedido(index){

        this._pedidoService.deletePedido(index);

    }
}