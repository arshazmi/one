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
    // console.log("service1");
    return this.http.get(`${this.baseUrl}/topic/top`);
  
  }

  getTopics():Observable<any>{
     console.log("service2");
    return this.http.get(`${this.baseUrl}/post/home`);
  }

  // getTopics(id:any){
  //   console.log(id);
  //   return this.http.get(`${this.baseUrl}/${id}`);
  // }
  getPostById(id:number):Observable<any>{
    console.log("Get a Post");
    return this.http.get(`${this.baseUrl}/post/${id}`);
  }
}
