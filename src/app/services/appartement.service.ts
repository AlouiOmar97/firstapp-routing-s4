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
  addAppartment(appart : Appartement):Observable<Appartement>{
    return this.http.post<Appartement>(this.appartementUrl, appart)
  }
  deleteAppartment(id:number){
    return this.http.delete(this.appartementUrl+id)
  }
}
