import { Component, OnInit } from '@angular/core';
import { HttpClientService, Etudiant } from '../service/http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {

  etudiants:Etudiant[];

  constructor(private router:Router,
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

  supetudiant(etudiant: Etudiant): void {
    this.httpClientService.deleteEtudiant(etudiant.id).subscribe( data => {
      
      this.etudiants = this.etudiants.filter(u => u !== etudiant);
    })  
  };
  editEtudiant(etudiant: Etudiant):void{
    this.router.navigate(["/editetudiant",etudiant.id])
  }
}
