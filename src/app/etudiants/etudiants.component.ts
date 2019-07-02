import { Component, OnInit } from '@angular/core';
import { HttpClientService, Etudiant } from '../service/http-client.service';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {

  etudiants:Etudiant[];

  constructor(
    private httpClientService:HttpClientService
  ) {}

  ngOnInit() {
    this.httpClientService.getEtudiants().subscribe(
     response =>this.handleSuccessfulResponse(response)
    );
  }
  handleSuccessfulResponse(response){
    this.etudiants=response;
  }

  deleteEtudiant(etudiant: Etudiant): void {
    if (confirm('Are you sure you want to DELETE etudiant .. with database?')) {
      this.httpClientService.deleteEtudiant(etudiant)
      .subscribe( data => {
        this.etudiants = this.etudiants.filter(u => u !== etudiant);
      })  
    }
  };
}
