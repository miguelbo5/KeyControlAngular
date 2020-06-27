import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { TiendaComponent } from './Components/tienda.component';
import { ProductoComponent } from './Components/producto.component';
import { InicioComponent } from './Components/inicio.component';
import { ErrorComponent } from './Components/error.component';
import { ProductosComponent } from './Components/productos.component';
import { PedidosComponent } from './Components/pedidos.component';
import { InformesComponent } from './Components/informes.component';
import { ClientesComponent } from './Components/clientes.component';
import { ContactoComponent } from './Components/contacto.component';
import { CarritoComponent } from './Components/carrito.component';
import { LoginComponent } from './Components/login.component';
import { RegistroComponent } from './Components/registro.component';

const appRoutes : Routes = [

    {path: 'tienda', component : TiendaComponent},
    {path: 'producto', component : ProductoComponent},
    {path: 'producto/:id', component : ProductoComponent},
    {path: 'clientes', component : ClientesComponent},
    {path: 'productos', component : ProductosComponent},
    {path: 'pedidos', component : PedidosComponent},
    {path: 'informes', component : InformesComponent},
    {path: 'contacto', component : ContactoComponent},
    {path: 'carrito', component : CarritoComponent},
    {path: 'login', component : LoginComponent},
    {path: 'registro', component : RegistroComponent},
    {path: '', component : InicioComponent},
    {path: '**', component : ErrorComponent}

];

export const appRoutingProviders:any[] = [];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);