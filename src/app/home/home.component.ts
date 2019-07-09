import { Component, OnInit } from '@angular/core';
import { Formation, Etudiant, HttpClientService } from '../service/http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formations:Formation[]
  etudiants:Etudiant[]
  constructor(private router:Router,
    private httpClientService:HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getFormations().subscribe(
      response =>this.formations=response
     );
    this.httpClientService.getEtudiants().subscribe(
      response =>this.etudiants=response
    );
  }

}
