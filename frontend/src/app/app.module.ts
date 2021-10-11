import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { SectionbodyComponent } from './sectionbody/sectionbody.component';
import { RightService } from './right.service';


import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TopicheadComponent } from './topichead/topichead.component';
import { TopicdetailComponent } from './topicdetail/topicdetail.component';
import { TopicbodyComponent } from './topicbody/topicbody.component';
import { PostdetailComponent } from './postdetail/postdetail.component';
import { CommentComponent } from './comment/comment.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    RightsidebarComponent,
    IndexpageComponent,
    SectionbodyComponent,
    TopicheadComponent,
    TopicdetailComponent,
    TopicbodyComponent,
    PostdetailComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [RightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
