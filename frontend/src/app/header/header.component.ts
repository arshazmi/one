import { Component, ViewEncapsulation ,OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { RightService } from '../right.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  closeResult = '';
  topics=[{id:0,topicName:'',imageUrl:''}];

  constructor(private modalService: NgbModal, private _Service:RightService) {}

  ngOnInit(){
    this.getTopics();
  }

  open(content:any) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  getTopics(){
    this._Service.getTopTopics().subscribe(data=>{
      console.log(data);
      this.topics=data;
    })
  }
  

}
