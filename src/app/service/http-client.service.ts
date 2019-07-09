import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


export class Etudiant{
  constructor(
    public id:number,
    public cin:string,
    public nom:string,
    public prenom:string,
    public num:string,
    public email:string,
    public passwd:string
  ) {}
}
export class Formation{
  constructor(
    public id:number,
    public nom:string,
    public prof:string,
    public prix:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) { 
  }
  //etudiant
  getEtudiants(){
    return this.httpClient.get<Etudiant[]>('http://localhost:8080/etudiants');
  }
  public deleteEtudiant(id) {
    return this.httpClient.get<Etudiant>("http://localhost:8080/etudiants/delete/"+id);
  }

  public createEtudiant(etudiant) {
    return this.httpClient.post<Etudiant>("http://localhost:8080/etudiants", etudiant);
  }
  // formation
  getFormations(){
    return this.httpClient.get<Formation[]>('http://localhost:8080/formations');
  }
  public deleteFormation(id) {
    return this.httpClient.get<Formation>("http://localhost:8080/formations/delete/"+id);
  }

  public createFormation(formation) {
    return this.httpClient.post<Formation>("http://localhost:8080/formations/add", formation);
  }

}
