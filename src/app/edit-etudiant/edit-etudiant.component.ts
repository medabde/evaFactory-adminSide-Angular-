import { Component, OnInit } from '@angular/core';
import { HttpClientService, Etudiant} from '../service/http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-etudiant',
  templateUrl: './edit-etudiant.component.html',
  styleUrls: ['./edit-etudiant.component.css']
})
export class EditEtudiantComponent implements OnInit {
  user : Etudiant =new Etudiant("","","","")

  constructor(private httpClientService: HttpClientService,private router:Router) { }

  ngOnInit() {
  }

  editEtudiant(): void {
    this.router.navigate(['etudiants']);
    this.httpClientService.editEtudiant(this.user).subscribe( data => {
      alert("etudiant edited successfully.");
    });
  }
}

