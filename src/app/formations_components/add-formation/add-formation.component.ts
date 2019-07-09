import { Component, OnInit } from '@angular/core';
import { Formation, HttpClientService } from 'src/app/service/http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css']
})
export class AddFormationComponent implements OnInit {
  formation : Formation =new Formation(null,"","","")
  constructor(private httpClientService: HttpClientService,private router:Router) { }

  ngOnInit() {
  }

  createFormation(): void {
    this.httpClientService.createFormation(this.formation).subscribe( data => {
      this.router.navigate(['formations']);
    });
  }
}
