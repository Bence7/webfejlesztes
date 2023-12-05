import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from "../models/user.model";

const baseUrl = 'http://localhost:8080/api/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(baseUrl);
  }

  create(data: User): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: Number, data: User): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: Number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  addCarToUser(userid:Number, carid:Number): Observable<any> {
    return this.http.post(`${baseUrl}/${userid}/${carid}`,{});
  }


}
