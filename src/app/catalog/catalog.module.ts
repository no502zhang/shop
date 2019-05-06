import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { CatalogRoutingModule } from './catalog-routing.module';

import { CatalogComponent } from './catalog.component';

@NgModule({
  declarations: [CatalogComponent],
  imports: [
    SharedModule,
    CatalogRoutingModule
  ]
})
export class CatalogModule { }
