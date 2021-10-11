import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RightService } from '../right.service';

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
      topicName:''
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
  constructor(private _route:ActivatedRoute, private _Service:RightService) { }

  ngOnInit(): void {
    this.id=+this._route.snapshot.params['id'];
    this._Service.getPostById(this.id).subscribe(data=>{
      this.top=data;
      console.log(data);
      this.ready=1;
    })
  }

  

}
