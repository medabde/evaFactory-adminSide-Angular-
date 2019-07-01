import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EtudiantsComponent} from './etudiants/etudiants.component'
import {AddEtudiantComponent} from './add-etudiant/add-etudiant.component'
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import {AuthGaurdService} from './service/auth-gaurd.service'

const routes: Routes = [
  { path:'etudiants', component: EtudiantsComponent,canActivate:[AuthGaurdService]},
  { path:'addetudiant', component: AddEtudiantComponent,canActivate:[AuthGaurdService]},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
