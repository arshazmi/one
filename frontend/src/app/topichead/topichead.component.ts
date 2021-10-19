import { Component,Input, OnInit } from '@angular/core';
import { RightService } from '../right.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-topichead',
  templateUrl: './topichead.component.html',
  styleUrls: ['./topichead.component.css']
})
export class TopicheadComponent implements OnInit {
  @Input() topic:any; 
// top={
//   id:0,
//   topicName:'What weird food combinations do you really enjoy?',
//   description:'working',
//   imageUrl:'https://picsum.photos/250/300',
//   user:{
//     id:0,
//     userName:'name',
//     userImage:'uimg'
//   },
//   posts: [
//     {
//         id: 0,
//         postName: "Look this picture closely",
//         audioUrl: "sound",
//         pdfUrl: "text",
//         imageUrl: "../../assets/images/widget-1.jpg",
//         desc: "This is a post with a picture",
//         createdAt: "2021-10-07T06:59:12.842Z",
//         user: {
//             id: 1,
//             userName: "arsheena",
//             userImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//             createdAt: "2021-10-05T07:53:59.838Z"
           
//         }
//     }]
  // userId:'',
  // topiccategoryId:''
//}
  constructor() { }

  ngOnInit(): void { 
    this.topic.imageUrl='http://localhost:90/'+this.topic.imageUrl.slice(2);
   
    console.log(this.topic)
    }

}
