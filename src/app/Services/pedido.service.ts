import { Injectable } from "@angular/core";
import { Producto } from '../Models/producto';
import { ProductoComponent } from "../Components/producto.component";
import { Pedido } from "../Models/pedido";

@Injectable()
export class PedidoService{

    public listadoPedidos:Array<Pedido>;

    constructor(){

        this.listadoPedidos = [

            new Pedido('jose@gmail.com', 'Logitech G910', 'Avda Pi i Margall', 97, 'Tarjeta'),
            new Pedido('mario@gmail.com', 'Logitech G910', 'Avda Pi i Margall', 97, 'Tarjeta'),
            new Pedido('jose@gmail.com', 'Logitech G910', 'Avda Pi i Margall', 97, 'Tarjeta'),
            new Pedido('jose@gmail.com', 'Logitech G910', 'Avda Pi i Margall', 97, 'Tarjeta'),
            new Pedido('jose@gmail.com', 'Logitech G910', 'Avda Pi i Margall', 97, 'Tarjeta')

        ];

    }

    getListadoPedidos(){

        return this.listadoPedidos;
    }
    
    setListadoPedidos(listadoPedidos){

        this.listadoPedidos = this.listadoPedidos;
    }

    addPedido(pedido: Pedido){

        this.listadoPedidos.push(pedido);
    }

    createPedido(emailCliente, productoComprado, direccionEnvio, precioTotal, metodoPago){

        let pedido = new Pedido(emailCliente, productoComprado, direccionEnvio, precioTotal, metodoPago);

        return pedido;
    }

    readPedido(key, value){

        return this.listadoPedidos.find(pedido => pedido[key] == value);
    }

    updatePedido(index, emailCliente, productoComprado, direccionEnvio, precioTotal, metodoPago){

        let pedido = new Pedido(emailCliente, productoComprado, direccionEnvio, precioTotal, metodoPago);

        this.listadoPedidos[index] = pedido;
    }

    deletePedido(index){

        this.listadoPedidos.splice(index, 1);

    }

}