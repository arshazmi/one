import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RightService } from '../right.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
   @Input() comments:any;
   @Input() post:number=0;
   @Output() postcomment =new EventEmitter<boolean>()
   msg='';
  constructor(private _Service:RightService) { }

  ngOnInit(): void {
    console.log(this.comments,"this is c",typeof this.comments)
  }

  postComment(){
    console.log("post id",this.post)
    this._Service.postComment(this.post,this.msg).subscribe(data=>{
      console.log(data);
      this.msg='';
      this.postcomment.emit(true);      
    })
  }
}
