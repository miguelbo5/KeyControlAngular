import { Injectable } from "@angular/core";
import { Comentario } from '../Models/comentario';
import { ComentarioComponent } from "../Components/comentario.component";

@Injectable()
export class ComentarioService {

    public listadoComentarios: Array<Comentario>;

    constructor() {

        this.listadoComentarios = [

            new Comentario(1, "Jose", "jose@gmail.com", new Date(), "Hola")

        ];

    }

    getListadoComentarios() {

        return this.listadoComentarios;

    }

}