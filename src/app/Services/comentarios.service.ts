import { Injectable } from "@angular/core";
import { Comentario } from '../Models/comentario';
import { ContactoComponent } from "../Components/contacto.component";

@Injectable()
export class ComentarioService {

    public listadoComentarios: Array<Comentario>;

    constructor() {

        this.listadoComentarios = [

            new Comentario(1, 'Jose', 'jose@gmail.com', new Date(), 'Muy buena pagina'),
            new Comentario(2, 'Sergio', 'sergio@gmail.com', new Date(), 'No me ha gustado la pagina.'),
            new Comentario(3, 'Carlos', 'carlos@gmail.com', new Date(), 'Ostiaaaa Piloteees, que son de boneeesss.'),
            new Comentario(4, 'Javi', 'javi@gmail.com', new Date(), 'Soy un mono')

        ];

    }

    getSizeListadoComentarios(){

        return this.listadoComentarios.length;

    }

    getListadoComentarios() {

        return this.listadoComentarios;

    }

    setListadoComentarios(listadoComentarios) {

        this.listadoComentarios = listadoComentarios;

    }

    addComentario(comentario: Comentario) {

        this.listadoComentarios.push(comentario);
    }

    createComentario(nombre, email, direccion) {

        let comentario = new Comentario(this.listadoComentarios.length + 1, nombre, email, new Date(), direccion);

        return comentario;
    }

    readComentario(key, value) {

        return this.listadoComentarios.find(comentario => comentario[key] == value);
    }

    updateComentario(index, nombre, email, mensaje) {

        let comentario = new Comentario(this.listadoComentarios.length, nombre, email, new Date(), mensaje);
        this.listadoComentarios[index] = comentario;
    }

    deleteComentario(index) {

        this.listadoComentarios.splice(index, 1);

    }

}