import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Residence } from '../core/models/residence';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {
  residenceUrl="http://localhost:3000/residence/"
  constructor(private http: HttpClient) { }

  findAllResidences():Observable<Residence[]>{
    return this.http.get<Residence[]>(this.residenceUrl)
  }
  findResidenceById(id:number):Observable<Residence[]>{
    return this.http.get<Residence[]>(this.residenceUrl+id)
  }
  addResidence(appart : Residence):Observable<Residence>{
    return this.http.post<Residence>(this.residenceUrl, appart)
  }
  deleteResidence(id:number){
    return this.http.delete(this.residenceUrl+id)
  }
}
