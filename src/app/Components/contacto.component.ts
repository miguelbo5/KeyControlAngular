import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Comentario } from '../Models/comentario';
import { ComentarioService } from '../Services/comentarios.service';

@Component({
    selector: 'contacto',
    templateUrl: '../Views/contacto.component.html',
    styleUrls: ['../../assets/Css/contacto.component.css'],
    providers: [ComentarioService]
})

export class ContactoComponent implements OnInit {

    public listadoComentarios:Array<Comentario>;

    public formulario = {nombre: '', email: '', mensaje: ''};

    constructor(private _route:ActivatedRoute, private _router:Router, private _comentarioService: ComentarioService) { }

    ngOnInit() {

        this.listadoComentarios = this._comentarioService.getListadoComentarios();

    }

    public enviarComentario(){

        let comentario = this._comentarioService.createComentario(this.formulario.nombre, this.formulario.email, this.formulario.mensaje);

        this._comentarioService.addComentario(comentario);


        this.formulario.nombre = "";
        this.formulario.email = "";
        this.formulario.mensaje = "";

    }
}