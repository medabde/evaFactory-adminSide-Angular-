import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EtudiantsComponent} from './etudiants_components/etudiants/etudiants.component'
import {AddEtudiantComponent} from './etudiants_components/add-etudiant/add-etudiant.component'
import { LoginComponent } from './authentication_components/login/login.component';
import { LogoutComponent } from './authentication_components/logout/logout.component';
import {AuthGaurdService} from './service/auth-gaurd.service'
import {EditEtudiantComponent} from './etudiants_components/edit-etudiant/edit-etudiant.component'

const routes: Routes = [
  { path:'etudiants', component: EtudiantsComponent,canActivate:[AuthGaurdService]},
  { path:'addetudiant', component: AddEtudiantComponent,canActivate:[AuthGaurdService]},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService]},
  { path: 'editetudiant', component: EditEtudiantComponent,canActivate:[AuthGaurdService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
