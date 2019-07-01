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
  public deleteEmployee(employee) {
    return this.httpClient.delete<Etudiant>("http://localhost:8080/etudiants" + "/"+ employee.empId);
  }
  
  public createEmployee(employee) {
    return this.httpClient.post<Etudiant>("http://localhost:8080/etudiant", employee);
  }
  
}
