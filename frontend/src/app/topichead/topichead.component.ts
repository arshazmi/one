import { Component,Input, OnInit } from '@angular/core';
import { RightService } from '../right.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-topichead',
  templateUrl: './topichead.component.html',
  styleUrls: ['./topichead.component.css']
})
export class TopicheadComponent implements OnInit {
  @Input() id = ''; 
topicdetail=[{
  id:'',
  topicName:'',
  description:'',
  imageUrl:'',
  // userId:'',
  // topiccategoryId:''
}]
  constructor(private router:Router,private route: ActivatedRoute,
    private _Service:RightService) { }

  ngOnInit(): void {
    this._Service.getTopicDetail(this.id).subscribe((data)=>{
      console.log(data);
      this.topicdetail=JSON.parse(JSON.stringify(data)); 
})
  }

}
