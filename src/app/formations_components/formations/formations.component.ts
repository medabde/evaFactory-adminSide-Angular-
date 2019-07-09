import { Component, OnInit } from '@angular/core';
import { Formation, HttpClientService } from 'src/app/service/http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {

  formations:Formation[];

  constructor(private router:Router,
    private httpClientService:HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getFormations().subscribe(
      response =>this.handleSuccessfulResponse(response)
     );
  }
  handleSuccessfulResponse(response){
    this.formations=response;
  }

  supFormation(formation: Formation): void {
    this.httpClientService.deleteFormation(formation.id).subscribe( data => {
      this.formations = this.formations.filter(u => u !== formation);
    })  
  };
  editFormation(formation: Formation):void{
    this.router.navigate(["/editformation",{id:formation.id,nom:formation.nom,
      prof:formation.prof,prix:formation.prix
    }])
  }

}
