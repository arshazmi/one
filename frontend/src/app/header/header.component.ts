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
  audioUrl:any;
  pdfUrl:any;
  closeResult = '';
  topics=[{id:0,topicName:'',imageUrl:''}];
  public imagePath:any;
  imgURL: any;
  public message: string='';
  topiccategory=[{id:0,categoryName:''}];
  constructor(private modalService: NgbModal, private _Service:RightService) {}

  ngOnInit(){
    this.getTopiccategory();
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

  getTopiccategory(){
    this._Service.getTopiccategory().subscribe(data=>{
      console.log(data);
      this.topiccategory=data;
    })
  }

  getTopics(){
    this._Service.getTopTopics().subscribe(data=>{
      console.log(data);
      this.topics=data;
    })
  }

  onFileChanged(event:any) {
    const file = event.target.files[0];  
    console.log(file)
  }

  audioFile(event:any)  {
    const audio = event.target.files[0];
    console.log(audio)
    this.audioUrl='../../assets/uploads/'+audio.name;
  }

  pdfFile(event:any)  {
    const pdf = event.target.files[0];
    console.log(pdf);
    this.pdfUrl='../../assets/uploads/'+pdf.name;
  }

  removeAudio(){
    console.log("remove audio")
    this.audioUrl=null;
  }

  preview(files:any) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }


  


}
