import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantsComponent } from './etudiants_components/etudiants/etudiants.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEtudiantComponent } from './etudiants_components/add-etudiant/add-etudiant.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './authentication_components/login/login.component';
import { LogoutComponent } from './authentication_components/logout/logout.component';
import { EditEtudiantComponent } from './etudiants_components/edit-etudiant/edit-etudiant.component';
import { FormationsComponent } from './formations_components/formations/formations.component';
import { AddFormationComponent } from './formations_components/add-formation/add-formation.component';
import { EditFormationComponent } from './formations_components/edit-formation/edit-formation.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    EtudiantsComponent,
    AddEtudiantComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    EditEtudiantComponent,
    FormationsComponent,
    AddFormationComponent,
    EditFormationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
