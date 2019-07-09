import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EtudiantsComponent} from './etudiants_components/etudiants/etudiants.component'
import {AddEtudiantComponent} from './etudiants_components/add-etudiant/add-etudiant.component'
import { LoginComponent } from './authentication_components/login/login.component';
import { LogoutComponent } from './authentication_components/logout/logout.component';
import {AuthGaurdService} from './service/auth-gaurd.service'
import {EditEtudiantComponent} from './etudiants_components/edit-etudiant/edit-etudiant.component'
import {FormationsComponent} from './formations_components/formations/formations.component'
import {AddFormationComponent} from './formations_components/add-formation/add-formation.component'
import {EditFormationComponent} from './formations_components/edit-formation/edit-formation.component'
import {HomeComponent} from './home/home.component'

const routes: Routes = [
  { path:'etudiants', component: EtudiantsComponent,canActivate:[AuthGaurdService]},
  { path:'addetudiant', component: AddEtudiantComponent,canActivate:[AuthGaurdService]},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService]},
  { path: 'editetudiant', component: EditEtudiantComponent,canActivate:[AuthGaurdService]},
  { path: 'formations', component: FormationsComponent,canActivate:[AuthGaurdService]},
  { path: 'addformation', component: AddFormationComponent,canActivate:[AuthGaurdService]},
  { path: 'editformation', component: EditFormationComponent,canActivate:[AuthGaurdService]},
  { path: 'home', component: HomeComponent,canActivate:[AuthGaurdService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
