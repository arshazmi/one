import { Component, Input, OnInit } from '@angular/core';
import { RightService } from '../right.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  id=1;
  top={
    id: 0,
    postName: '',
    imageUrl: '',
    pdfUrl: '',
    audioUrl: '',
    desc:'',
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
    } 
   }
  constructor(private _Service:RightService) { }

  ngOnInit(): void {
    this._Service.getPostById(this.id).subscribe(data=>{
      console.log(data);
      this.top=data;
    })
  }

}
