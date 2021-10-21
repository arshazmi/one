import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-topicbody',
  templateUrl: './topicbody.component.html',
  styleUrls: ['./topicbody.component.css']
})
export class TopicbodyComponent implements OnInit {
  @Input() posts:any=[];
  url="http://localhost:90/";
 
  constructor() { }

  ngOnInit(): void {
    console.log(this.posts,"topicbody")
    this.showAssets();
  }

  showAssets(){
    this.posts.forEach((data:any) => {
      console.log(data,"ccccc");
      if(data.imageUrl!==null) data.imageUrl=this.url+this.changePath(data.imageUrl);
    if(data.audioUrl!==null) data.audioUrl=this.url+this.changePath(data.audioUrl);
    if(data.pdfUrl!==null) data.pdfUrl=this.url+this.changePath(data.pdfUrl);
      
    });
    console.log("modified data",this.posts)
  }

  changePath(imageUrl: any):string {
    return imageUrl.replaceAll('\\','/')
  }


}
