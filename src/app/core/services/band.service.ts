import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Band } from '../models/band.model';

@Injectable({
  providedIn: 'root'
})
export class BandService {
  API_URL = `${environment.apiUrl}/band`;
  constructor (private http: HttpClient){ }

  list(){
    return this.http.get<any[]>(this.API_URL);
  }

  get(band_id: number){
    return this.http.get<Band>(`${this.API_URL}/${band_id}`);
  }

  update(band_id:number, data:any){
    return this.http.put<Band>(`${this.API_URL}/${band_id}`, data);
  }
}