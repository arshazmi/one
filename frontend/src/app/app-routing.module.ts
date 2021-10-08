import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopicdetailComponent } from './topicdetail/topicdetail.component';
import { PostdetailComponent } from './postdetail/postdetail.component';
import { IndexpageComponent } from './indexpage/indexpage.component';
const routes: Routes = [
  {path:"indexpage",component:IndexpageComponent},
  {path:"postdetail/:id",component:PostdetailComponent},
  {path:"topicdetail/:id",component:TopicdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
