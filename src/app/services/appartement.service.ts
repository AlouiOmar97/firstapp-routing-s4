import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appartement } from '../core/models/appartement';

@Injectable({
  providedIn: 'root'
})
export class AppartementService {
  appartementUrl="http://localhost:3000/appartement/"
  constructor(private http: HttpClient) { }

  findAllAppartments():Observable<Appartement[]>{
    return this.http.get<Appartement[]>(this.appartementUrl)
  }
  findAppartmentById(id:number):Observable<Appartement>{
    return this.http.get<Appartement>(this.appartementUrl+id)
  }
  addAppartment(appart : Appartement):Observable<Appartement>{
    return this.http.post<Appartement>(this.appartementUrl, appart)
  }
  updateAppartment(id:number,appart : Appartement){
    return this.http.put(this.appartementUrl+id,appart)
  }
  deleteAppartment(id:number){
    return this.http.delete(this.appartementUrl+id)
  }
}
