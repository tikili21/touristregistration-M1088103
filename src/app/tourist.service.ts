import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Tourist } from './tourist';

@Injectable({
  providedIn: 'root'
})
export class TouristService {

  private baseURL = "http://localhost:7359/api/v1/tourists";

  constructor(private httpClient: HttpClient) { }

  getTouristsList(): Observable<Tourist[]>{
    return this.httpClient.get<Tourist[]>(`${this.baseURL}`);
  }

  createTourist(tourist: Tourist):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, tourist);
  }

  getTouristById(id: number): Observable<Tourist>{
    return this.httpClient.get<Tourist>(`${this.baseURL}/${id}`);
  }
  updateTourist(id: number, tourist: Tourist): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, tourist);
  }
}
