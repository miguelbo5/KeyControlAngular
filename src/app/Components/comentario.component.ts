import { Component, OnInit } from '@angular/core';
import { Comentario } from '../Models/comentario';
import { ComentarioService } from '../Services/comentario.service';

@Component({
    selector: 'comentario',
    templateUrl: '../Views/comentario.component.html',
    styleUrls: ['../../assets/Css/comentario.component.css'],
    providers: [ComentarioService]
})

export class ComentarioComponent implements OnInit {

    public listadoComentarios: Array<Comentario>;

    constructor(private _comentarioService: ComentarioService) {

    }

    ngOnInit() {

        this.listadoComentarios = this._comentarioService.getListadoComentarios();

    }

}