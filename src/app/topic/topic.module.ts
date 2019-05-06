import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { TopicRoutingModule } from './topic-routing.module';

import { TopicComponent } from './topic.component';

@NgModule({
  declarations: [TopicComponent],
  imports: [
    SharedModule,
    TopicRoutingModule
  ]
})
export class TopicModule { }
