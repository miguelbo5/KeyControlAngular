import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing, appRoutingProviders} from './app.routing';

import { FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';

import { CabeceraComponent } from './Components/header.component';
import { PieComponent } from './Components/footer.component';
import { LateralComponent } from './Components/aside.component';
import { PrincipalComponent } from './Components/principal.component';
import { InicioComponent } from './Components/inicio.component';
import { InformesComponent } from './Components/informes.component';
import { ClientesComponent } from './Components/clientes.component';
import { ProductosComponent } from './Components/productos.component';
import { PedidosComponent } from './Components/pedidos.component';
import { ProductoComponent } from './Components/producto.component';
import { CarritoComponent } from './Components/carrito.component';
import { TiendaComponent } from './Components/tienda.component';
import { ErrorComponent } from './Components/error.component';
import { ContactoComponent } from './Components/contacto.component';
import { LoginComponent } from './Components/login.component';
import { RegistroComponent } from './Components/registro.component';
import { DineroPipe } from './Pipes/dinero.pipe';
import { NegritaPipe } from './Pipes/negrita.pipe';
import { NombreApellidoPipe } from './Pipes/nombreApellido.pipe';
import { TrueFalsePipe } from './Pipes/trueFalse.pipe';

import { AppComponent } from './Components/app.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent,
    LateralComponent,
    PrincipalComponent,
    InicioComponent,
    ClientesComponent,
    InformesComponent,
    ProductosComponent,
    PedidosComponent,
    ProductoComponent,
    CarritoComponent,
    TiendaComponent,
    ErrorComponent,
    ContactoComponent,
    LoginComponent,
    RegistroComponent,
    DineroPipe,
    NegritaPipe,
    NombreApellidoPipe,
    TrueFalsePipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
