import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BottomNavComponent } from './bottom-nav/bottom-nav.component';

@NgModule({
  declarations: [BottomNavComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    RouterModule,

    BottomNavComponent
  ]
})
export class SharedModule { }
