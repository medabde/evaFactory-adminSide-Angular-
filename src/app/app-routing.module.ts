import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EtudiantsComponent} from './etudiants/etudiants.component'
import {AddEtudiantComponent} from './add-etudiant/add-etudiant.component'

const routes: Routes = [
  { path:'etudiants', component: EtudiantsComponent},
  { path:'addetudiant', component: AddEtudiantComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
