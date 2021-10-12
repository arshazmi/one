import { Component, OnInit } from '@angular/core';
import { RightService } from '../right.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-sectionbody',
  templateUrl: './sectionbody.component.html',
  styleUrls: ['./sectionbody.component.css']
})
export class SectionbodyComponent implements OnInit {
   topics=[{
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
      topicName:'',
      imageUrl:''
    }, 
    postengage:{
      id:'',
      like:'',
      dislike:''
    } 
   }]
  constructor(private router:Router,private route: ActivatedRoute,
    private _Service:RightService) { }

  ngOnInit(): void {
 
    this._Service.getTopics().subscribe((data)=>{
      console.log(data);
      this.topics=JSON.parse(JSON.stringify(data)); 
    })

  }

  getPostDetail(top:any){
    this.router.navigate(['postdetail',top.id]);
  }

  getTopicDetail(top:any){
    this.router.navigate(['topicdetail',top.id]);
  }

  getAPost(id:number){
    this.router.navigate(['post',id]);
   
  }
}
