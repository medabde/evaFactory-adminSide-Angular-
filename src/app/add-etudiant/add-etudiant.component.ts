import { Component, OnInit } from '@angular/core';
import { HttpClientService, Etudiant} from '../service/http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {

  user : Etudiant =new Etudiant(null,"","","","","","")

  constructor(private httpClientService: HttpClientService,private router:Router) { }

  ngOnInit() {
  }

  createEtudiant(): void {
    this.httpClientService.createEtudiant(this.user).subscribe( data => {
      this.router.navigate(['etudiants']);
    });
  }

}
