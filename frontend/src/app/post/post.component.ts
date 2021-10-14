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
      id:'',
      like:'',
      dislike:''
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
  
  // pdfSource="./../../assets/uploads/sample.pdf";
  pdfSource="./../../assets/uploads/sample.pdf";
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

      this.top=data;
      //this.top.imageUrl='../../../../backend/'+this.top.imageUrl;
      //this.top.imageUrl='../../../../backend/public/images/image1582545990148.png'
      this.ready=1;
     // data.imageUrl='../../../../backend/public/images/image1582545990148.png'
      if(data.imageUrl!==null) this.imgPresent=true;
      if(data.pdfUrl!==null) this.pdfPresent=true;
      if(data.audioUrl!==null) this.audioPresent=true;
      console.log(data.pdfUrl,data.audioUrl,data.imageUrl);

    })
  }

  updateDone(evt:any):void{
    console.log(evt)
    this._Service.getPostById(this.id).subscribe(data=>{
      this.top=data;
  })
}


}
