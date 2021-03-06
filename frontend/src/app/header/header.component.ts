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

  audio:any;
  file:any;
  pdf:any;
  postdesc:string='';
  postName:string='';
  topic:any;

  topiccategoryId:any;
  topicName:string='';
  description:string='';
  topicImage:any;

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
    this.file = event.target.files[0];  
    console.log(this.file)
  }

  topicImg(event:any) {
    this.topicImage = event.target.files[0];  
    console.log(this.topicImage)
  }

  audioFile(event:any)  {
    this.audio = event.target.files[0];
    console.log(this.audio)
    this.audioUrl='../../assets/uploads/'+this.audio.name;
    
  }

  pdfFile(event:any)  {
    this.pdf = event.target.files[0];
    console.log(this.pdf);
    this.pdfUrl='../../assets/uploads/'+this.pdf.name;
  }

  removeAudio(){
    console.log("remove audio")
    this.audioUrl=null;
    this.audio=undefined;
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

   createPost(){
     console.log("Post create function");
    console.log(this.postName,this.postdesc,this.topic,this.file,this.audio,this.pdf)
     const fd=new FormData();
     fd.append('postName',this.postName);
     fd.append('desc',this.postdesc);
     if(this.file!==undefined)
     fd.append('bimage',this.file,this.file.name);
     if(this.audio!==undefined)
     fd.append('baudio',this.audio,this.audio.name);
     if(this.pdf!==undefined)
     fd.append('bpdf',this.pdf,this.pdf.name);
     fd.append('topicId',this.topic);
     this._Service.createPost(fd).subscribe(data=>{
       console.log(data);
       window.location.reload();
     })
   }

   createTopic(){
    console.log("Topic create function");
   console.log("lat",this.topicName,this.description,this.topiccategoryId,this.topicImage)
    const fd=new FormData();
    fd.append('topicName',this.topicName);
    fd.append('description',this.description);
    fd.append('cimage',this.topicImage,this.topicImage.name);
    fd.append('topiccategoryId',this.topiccategoryId);
    this._Service.createTopic(fd).subscribe(data=>{
      console.log(data);
    })
   // window.location.reload();
  }
  


}
