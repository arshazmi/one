import { Component, OnInit } from '@angular/core';
import { RightService } from '../right.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-rightsidebar',
  templateUrl: './rightsidebar.component.html',
  styleUrls: ['./rightsidebar.component.css']
})
export class RightsidebarComponent implements OnInit {
topTopics=[{
  id:'',
  topicName:'',
  imageUrl:''
}]
  constructor(private router:Router,private route: ActivatedRoute,
    private _Service:RightService) { }

  ngOnInit(): void {
  //   this._Service.getTopTopics().subscribe((data)=>{
  //     console.log(data);
  //     this.topTopics=JSON.parse(JSON.stringify(data));
  // })
  }

}
// GET
// RESPONSE
// Array of
// {
//         "id"
//         "topicName"
//         "imageUrl"
// }