import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'cabecera',
    templateUrl: '../Views/header.component.html',
    styleUrls: ['../../assets/Css/header.component.css']
})

export class CabeceraComponent implements OnInit {
    
    faUser = faUser;
    faShoppingCart = faShoppingCart;

    constructor() { }

    ngOnInit() { }
    
}