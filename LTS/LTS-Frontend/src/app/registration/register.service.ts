import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRegister } from '../User';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http : HttpClient) { }

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type':'application/json',
    })
  }

  onRegister(user : UserRegister) : Observable<any>{
    return this.http.post<UserRegister>('http://localhost:9090/register',user,this.httpOptions)
  }
}