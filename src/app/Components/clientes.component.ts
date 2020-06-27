import { Component, OnInit } from '@angular/core';
import { Cliente } from '../Models/cliente';
import { ClienteService } from '../Services/cliente.service';
import { Logs } from 'selenium-webdriver';


@Component({
    selector: 'clientes',
    templateUrl: '../Views/clientes.component.html',
    styleUrls: ['../../assets/Css/clientes.component.css'],
    providers: [ClienteService]
})

export class ClientesComponent implements OnInit {

    public listadoClientes: Array<Cliente>;

    public formulario = {nombre: '', apellidos: '', email: '', pwd: '', direccion: ''}

    constructor(private _clienteService: ClienteService) {

    }

    ngOnInit() {

        this.listadoClientes = this._clienteService.getListadoClientes();

    }

    public insertarCliente(){

        let cliente: Cliente;
        let fechaActual: Date;
        let fechaString: String;

        fechaActual = new Date();
        
        fechaString = fechaActual.toDateString();

        cliente = this._clienteService.createCliente(this.formulario.nombre, this.formulario.apellidos, this.formulario.email, fechaString, this.formulario.direccion);
        
        this._clienteService.addCliente(cliente);

    }

    public borrarCliente(index){

        this._clienteService.deleteCliente(index);

    }

    public editarCliente(){



    }

}