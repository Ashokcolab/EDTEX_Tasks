import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,catchError} from 'rxjs';
import { UserLogin, UserRegister} from './User';
import { Leave } from './User';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http:HttpClient) {
   }
   httpOptions={
    headers : new HttpHeaders({
      'Content-Type':'application/json',
    })
   }
   onLogin(user:UserLogin):Observable<any>{
    return this.http.post<UserLogin>('http://localhost:9090/login',user,this.httpOptions);

   }
   onApply(leave:Leave):Observable<any>{
    return this.http.post<Leave>('http://localhost:9090/apply-leave',leave,this.httpOptions);
   }
   onTrack(email:string):Observable<any>{
    return this.http.get<any>(`http://localhost:9090/get-leaves/${email}`);
   }
   onDelete(id:Number):Observable<any>{
    return this.http.delete<any>(`http://localhost:9090/delete-leave/${id}`);
   }

   getLeave(id:Number) : Observable<any>{
    return this.http.get<any>(`http://localhost:9090/get-leave/${id}`);
   }
   onsave(leave:Leave):Observable<any>{
    return this.http.post<any>(`http://localhost:9090/save`,leave,this.httpOptions);
   }
   onNewRequests():Observable<any>{
    return this.http.get<any>(`http://localhost:9090/mnewleaves`);
   }
   onPastLeaves():Observable<any>{
    return this.http.get<any>('http://localhost:9090/mpastleaves');
   }
   onAccept(id:Number,message : string):Observable<any>{
    return this.http.patch<any>(`http://localhost:9090/accept/${id}`,message);
   }
   onReject(id:Number,message:string):Observable<any>{
    return this.http.patch<any>(`http://localhost:9090/reject/${id}`,message);
   }
   onUpdate(leaves:Number):Observable<any>{
    return this.http.post<any>(`http://localhost:9090/numberofleaves/${leaves}`,null);
   }

}
