import { Component, OnInit } from '@angular/core';
import { HttpClientService, Etudiant} from '../service/http-client.service';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {

  user : Etudiant =new Etudiant("","","","")

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
  }

  createEtudiant(): void {
    this.httpClientService.createEtudiant(this.user).subscribe( data => {
      alert("Employee created successfully.");
    });
  }

}
