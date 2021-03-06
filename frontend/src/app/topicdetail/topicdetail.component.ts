import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RightService } from '../right.service';


@Component({
  selector: 'app-topicdetail',
  templateUrl: './topicdetail.component.html',
  styleUrls: ['./topicdetail.component.css']
})
export class TopicdetailComponent implements OnInit {
  @Input() id = 0; 
  top:any;
  posts:any;
  ready=false;
  /* top={
    id:0,
    topicName:'What weird food combinations do you really enjoy?',
    description:'working',
    imageUrl:'https://picsum.photos/250/300',
    user:{
      id:0,
      userName:'name',
      userImage:'uimg'
    },
    posts: [
      {
          id: 0,
          postName: "Look this picture closely",
          audioUrl: "sound",
          pdfUrl: "text",
          imageUrl: "../../assets/images/widget-1.jpg",
          desc: "This is a post with a picture",
          createdAt: "2021-10-07T06:59:12.842Z",
          user: {
              id: 1,
              userName: "arsheena",
              userImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              createdAt: "2021-10-05T07:53:59.838Z"
             
          }
      }]
    // userId:'',
    // topiccategoryId:''
  } */
  
    constructor(private _Service:RightService, private _route:ActivatedRoute ) { }
  
    ngOnInit(): void {
      this.id=+this._route.snapshot.params['id'];
      this._Service.getTopicDetail(this.id).subscribe((data)=>{
        console.log(JSON.stringify(data));
        this.top=JSON.parse(JSON.stringify(data)); 
        this.posts=data.posts;
        this.ready=true;
  })
    }
  
 

}
