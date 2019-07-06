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

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) { 
  }
  getEtudiants(){
    return this.httpClient.get<Etudiant[]>('http://localhost:8080/etudiants');
  }
  public deleteEtudiant(id) {
    return this.httpClient.get<Etudiant>("http://localhost:8080/etudiants/delete/"+id);
  }

  public createEtudiant(etudiant) {
    return this.httpClient.post<Etudiant>("http://localhost:8080/etudiants", etudiant);
  }

  public editEtudiant(etudiant) {
    return this.httpClient.get<Etudiant>("http://localhost:8080//etudiants/edit/",etudiant)
  }
}
