import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopicComponent } from './topic.component';

const topicRoutes: Routes = [
  { path: '', component: TopicComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(topicRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TopicRoutingModule { }
