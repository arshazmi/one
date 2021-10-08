import { Component, OnInit } from '@angular/core';
import { RightService } from '../right.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-sectionbody',
  templateUrl: './sectionbody.component.html',
  styleUrls: ['./sectionbody.component.css']
})
export class SectionbodyComponent implements OnInit {
   Topics=[{
    id: '',
    postName: '',
    imageUrl: '',
    pdfUrl: '',
    audioUrl: '',
    desc:'',
    user:'',
    topic:'', 
    postengage:'' 
   }]
  constructor(private router:Router,private route: ActivatedRoute,
    private _Service:RightService) { }

  ngOnInit(): void {
    this._Service.getTopics().subscribe((data)=>{
      console.log(data);
      this.Topics=JSON.parse(JSON.stringify(data));
      
  })
  }

}
