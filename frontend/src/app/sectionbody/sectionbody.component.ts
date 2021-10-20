import { Component, OnInit } from '@angular/core';
import { RightService } from '../right.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-sectionbody',
  templateUrl: './sectionbody.component.html',
  styleUrls: ['./sectionbody.component.css']
})
export class SectionbodyComponent implements OnInit {
  
  url="http://localhost:90/";
   
   topics=[{
    id: 0,
    postName: '',
    imageUrl: '',
    pdfUrl: '',
    imgPresent:false,
   pdfPresent:false,
   audioPresent:false,
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
      this.showAssets(data);
      this.topics=JSON.parse(JSON.stringify(data)); 
    })

  }

  showAssets(top:any){
    console.log(top)
    top.forEach((data:any) => {
      console.log(data,"ccccc");
       data.topic.imageUrl='http://localhost:90/'+data.topic.imageUrl.slice(2);
     
      if(data.imageUrl!==null) data.imageUrl=this.url+this.changePath(data.imageUrl);
    if(data.audioUrl!==null) data.audioUrl=this.url+this.changePath(data.audioUrl);
    if(data.pdfUrl!==null) data.pdfUrl=this.url+this.changePath(data.pdfUrl);
    if(data.imageUrl!==null) data.imgPresent=true ; else data.imgPresent=false;
    if(data.pdfUrl!==null) data.pdfPresent=true; else data.pdfPresent=false;
    if(data.audioUrl!==null) data.audioPresent=true; else data.audioPresent=false;
    });
  }

  getPostDetail(top:any){
    this.router.navigate(['postdetail',top.id]);
  }

  getTopicDetail(top:any){
    console.log(top,"top")
    this.router.navigate(['topicdetail',top.id]);
  }

  getAPost(id:number){
    this.router.navigate(['post',id]);
   
  }

  changePath(imageUrl: any):string {
    return imageUrl.replaceAll('\\','/')
  }
  

}
