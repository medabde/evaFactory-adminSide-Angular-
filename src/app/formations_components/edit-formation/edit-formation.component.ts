import { Component, OnInit } from '@angular/core';
import { Formation, HttpClientService } from 'src/app/service/http-client.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-formation',
  templateUrl: './edit-formation.component.html',
  styleUrls: ['./edit-formation.component.css']
})
export class EditFormationComponent implements OnInit {
  formation:Formation =new Formation(+this.route.snapshot.paramMap.get('id'),
  this.route.snapshot.paramMap.get('nom'),
  this.route.snapshot.paramMap.get('prof'),
  this.route.snapshot.paramMap.get('prix'))

  constructor(private httpClientService: HttpClientService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
  }

  editFormation(): void {
    this.httpClientService.createFormation(this.formation).subscribe( data => {
      this.router.navigate(['formations']);
    });
  }

}
