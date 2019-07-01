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
    
    this.etudiants.forEach(etudiant => {
      console.log(etudiant.name)  
    });
    
    
  }

}
