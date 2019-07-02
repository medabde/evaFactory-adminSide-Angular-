import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


export class Etudiant{
  constructor(
    public empId:string,
    public name:string,
    public designation:string,
    public salary:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) { 
  }
  getEtudiants(){
    console.log("test call");
    return this.httpClient.get<Etudiant[]>('http://localhost:8080/etudiants');
  }
  public deleteEtudiant(etudiant) {
    return this.httpClient.delete<Etudiant>("http://localhost:8080/etudiants/"+ etudiant.empId);
  }

  public createEtudiant(etudiant) {
    return this.httpClient.post<Etudiant>("http://localhost:8080/etudiants", etudiant);
  }

  public editEtudiant(etudiant) {
    return this.httpClient.post<Etudiant>("http://localhost:8080/etudiants/"+etudiant.empId,etudiant)
  }

}
