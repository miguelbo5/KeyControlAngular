import { Injectable } from "@angular/core";
import { Cliente } from '../Models/cliente';
import { ClientesComponent } from "../Components/clientes.component";

@Injectable()
export class ClienteService {

    public listadoClientes: Array<Cliente>;

    constructor() {

        this.listadoClientes = [

            new Cliente('Jose', 'Luis', 'jose@gmail.com', new Date('05/08/19'), 'Avda Patxi 34'),
            new Cliente('Patxi', 'Madrazo', 'patxi@gmail.com', new Date('03/10/19'), 'Avda Patxi 34'),
            new Cliente('Javi', 'Andres', 'javi@gmail.com', new Date('05/08/19'), 'Avda Patxi 34'),
            new Cliente('Sergio', 'Lopes', 'sergio@gmail.com', new Date('05/08/19'), 'Avda Patxi 34'),
            new Cliente('Carlos', 'Cuñat', 'carlos@gmail.com', new Date('05/08/19'), 'Avda Patxi 34'),
            new Cliente('Ximo', 'Garcia', 'ximo@gmail.com', new Date('05/08/19'), 'Avda Patxi 34'),
            new Cliente('Nacho', 'Andres', 'nacho@gmail.com', new Date('05/08/19'), 'Avda Patxi 34')

        ];

    }

    getSizeListadoClientes(){

        return this.listadoClientes.length;

    }

    getListadoClientes() {

        return this.listadoClientes;

    }

    setListadoClientes(listadoClientes) {

        this.listadoClientes = listadoClientes;

    }

    addCliente(cliente: Cliente) {

        this.listadoClientes.push(cliente);
    }

    createCliente(nombre, apellidos, email, fecha, direccion) {

        let cliente = new Cliente(nombre, apellidos, email, fecha, direccion);

        return cliente;
    }

    readCliente(key, value) {

        return this.listadoClientes.find(cliente => cliente[key] == value);
    }

    updateCliente(index, nombre, apellidos, email, fecha, direccion) {

        let cliente = new Cliente(nombre, apellidos, email, fecha, direccion);
        this.listadoClientes[index] = cliente;
    }

    deleteCliente(index) {

        this.listadoClientes.splice(index, 1);

    }

}