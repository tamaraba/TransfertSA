import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { ListPartenaireComponent } from './list-partenaire/list-partenaire.component';
import { CompteComponent } from './compte/compte.component';
import { DepotComponent } from './depot/depot.component';


const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'partenaire', component: PartenaireComponent },
  { path: 'listpartenaire', component: ListPartenaireComponent },
  { path: 'compte', component: CompteComponent },
  { path: 'depot', component: DepotComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }