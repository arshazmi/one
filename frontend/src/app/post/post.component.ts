import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
import { RightService } from '../right.service';
//import {} from '../../../../backend/'
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  id:number=0;
  ready=0;
  vote=0;
  top={
    id: 0,
    postName: '',
    imageUrl: '',
    pdfUrl: '',
    audioUrl: '',
    desc:'',
    updatedAt:'',
    comment_count:0,
    user:{
      id:'',
      userName:'',
    },
    topic:{
      id:'',
      topicName:'',
      imageUrl:''
    }, 
    postengage:{
      id:0,
      like:0,
      dislike:0
    } ,
    comments: [
      {
          id: 0,
          description: '',
          like: 0,
          dislike:0,
          userId:0,
          user: {
            id: 0,
            userName: '',
            userImage: ''
        }
      }
  ]
   }
   desc_short=true;
   desc:any;
   url="http://localhost:90/";
   imgPresent=false;
   pdfPresent=false;
   audioPresent=false;

  constructor(private _route:ActivatedRoute, private _Service:RightService) {
    pdfDefaultOptions.assetsFolder = 'bleeding-edge';
   }

  ngOnInit(): void {
    this.id=+this._route.snapshot.params['id'];
    this._Service.getPostById(this.id).subscribe(data=>{
      console.log(data,"values in post");
      data.topic.imageUrl='http://localhost:90/'+data.topic.imageUrl.slice(2);
      if(data.imageUrl!==null) data.imageUrl=this.url+this.changePath(data.imageUrl);
      if(data.audioUrl!==null) data.audioUrl=this.url+this.changePath(data.audioUrl);
      if(data.pdfUrl!==null) data.pdfUrl=this.url+this.changePath(data.pdfUrl);
      this.top=data;
      this.ready=1;
      if(data.imageUrl!==null) this.imgPresent=true;
      if(data.pdfUrl!==null) this.pdfPresent=true;
      if(data.audioUrl!==null) this.audioPresent=true;
      console.log(data.pdfUrl,data.audioUrl,data.imageUrl);
      this.moreHide();
    })
  }

  updateDone(evt:any):void{
    console.log(evt)
    this._Service.getPostById(this.id).subscribe(data=>{
      this.top=data;
  })
  this.ngOnInit();
}

changePath(imageUrl: any):string {
  return imageUrl.replaceAll('\\','/')
}

more(){
  this.desc_short=!this.desc_short;
  this.moreHide();
}

moreHide(){
  if(this.desc_short){
    this.desc=this.top.desc;
    this.desc=this.desc.substring(0,175);
    console.log(this.desc);
  }
  else{
    this.desc=this.top.desc;
  }
}


  upvote(){
    if(this.vote===1){//like
      this.vote=0;//no like or dislike
      this.top.postengage.like--;
    }else if(this.vote===2) { //dislike
      this.vote=1;
      this.top.postengage.like++;
      this.top.postengage.dislike--;
    }else{
      this.vote=1;
      this.top.postengage.like++;
    }
    
 }
 
 downvote(){
    if(this.vote===2){//dislike
      this.vote=0;//no like or dislike
      this.top.postengage.dislike--;
    }else if(this.vote===1){
      this.vote=2;
      this.top.postengage.dislike++;
      this.top.postengage.like--;
    }else {//no vote or dislike
      this.vote=2;
      this.top.postengage.dislike++;
    }
    
 }
 

 

}
 

