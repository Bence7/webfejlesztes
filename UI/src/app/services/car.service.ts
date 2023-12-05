import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car.model';

const baseUrl = 'http://localhost:8080/api/car';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get<Car>(baseUrl);
  }

  getAvailableCars(): Observable<any> {
    return this.http.get<Car>(`${baseUrl}/available`);
  }

  getSelectedCars(id:Number): Observable<any> {
    return this.http.get<Car>(`${baseUrl}/selected/${id}`);
  }

  get(id: any): Observable<Car> {
    return this.http.get<Car>(`${baseUrl}/${id}`);
  }

  create(data: Car): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  deleteId(id: any) : Observable<any>{
    return this.http.put<Car>(`${baseUrl}/unselect/${id}`, {});
  }
}
