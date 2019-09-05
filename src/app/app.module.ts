import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { PartenaireService } from './partenaire.service';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { RegisterComponent } from './register/register.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { ListPartenaireComponent } from './list-partenaire/list-partenaire.component';
import { CompteComponent } from './compte/compte.component';
import { DepotComponent } from './depot/depot.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    PartenaireComponent,
    RegisterComponent,
    ListPartenaireComponent,
    CompteComponent,
    DepotComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [AuthService ,PartenaireService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
