import { Component, OnInit } from '@angular/core';
import { HttpClientService, Etudiant} from '../service/http-client.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-etudiant',
  templateUrl: './edit-etudiant.component.html',
  styleUrls: ['./edit-etudiant.component.css']
})
export class EditEtudiantComponent implements OnInit {
  etudiants:Etudiant[];
  user : Etudiant=new Etudiant(+this.route.snapshot.paramMap.get('id'),"","","","","","")

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

