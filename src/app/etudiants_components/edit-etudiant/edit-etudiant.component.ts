import { Component, OnInit } from '@angular/core';
import { HttpClientService, Etudiant} from '../../service/http-client.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-etudiant',
  templateUrl: './edit-etudiant.component.html',
  styleUrls: ['./edit-etudiant.component.css']
})
export class EditEtudiantComponent implements OnInit {
  etudiants:Etudiant[];
  user : Etudiant=new Etudiant(+this.route.snapshot.paramMap.get('id'),
  this.route.snapshot.paramMap.get('cin'),
  this.route.snapshot.paramMap.get('nom'),
  this.route.snapshot.paramMap.get('prenom'),
  this.route.snapshot.paramMap.get('num'),
  this.route.snapshot.paramMap.get('email'),
  this.route.snapshot.paramMap.get('passwd'))

  constructor(private httpClientService: HttpClientService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.httpClientService.getEtudiants().subscribe(
      response =>this.etudiants=response
     );
  }

  editEtudiant(): void {
    this.httpClientService.createEtudiant(this.user).subscribe( data => {
      this.router.navigate(['etudiants']);
    });
  }
}

