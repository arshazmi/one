import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RightService {
private baseUrl =' http://localhost:90/api';
  constructor(private http:HttpClient) { }

  getTopTopics():Observable<any>{
    
    return this.http.get(`${this.baseUrl}/topic/top`);
    
  }

  // getTopics(id:any){
  //   console.log(id);
  //   return this.http.get(`${this.baseUrl}/${id}`);
  // }
}
