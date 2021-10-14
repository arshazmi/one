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

  getTopicDetail(id:any):Observable<any>{
    console.log("service3");
   return this.http.get(`${this.baseUrl}/topic/${id}`);
 }

  // getTopics(id:any){
  //   console.log(id);
  //   return this.http.get(`${this.baseUrl}/${id}`);
  // }
  getPostById(id:number):Observable<any>{
    console.log("Get a Post");
    return this.http.get(`${this.baseUrl}/post/${id}`);
  }

  postComment(id:number,msg:string){
    console.log("Post comment");
    return this.http.post(`${this.baseUrl}/post/comment/${id}`,{description:msg,like:0,dislike:0})
  }

  createPost(fd:FormData){
    console.log("Post creation service");
    return this.http.post(`${this.baseUrl}/post`,fd);
  }

}
