import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { HeaderComponent } from './header/header.component';
//import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { EditEtudiantComponent } from './edit-etudiant/edit-etudiant.component';

@NgModule({
  declarations: [
    AppComponent,
    EtudiantsComponent,
    AddEtudiantComponent,
    HeaderComponent,
    //FooterComponent,
    LoginComponent,
    LogoutComponent,
    EditEtudiantComponent
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
