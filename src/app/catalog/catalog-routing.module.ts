import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatalogComponent } from './catalog.component'

const catalogRoutes: Routes = [
  { path: '', component: CatalogComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(catalogRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CatalogRoutingModule { }
