import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'catalog', loadChildren: './catalog/catalog.module#CatalogModule' },
  { path: 'topic', loadChildren: './topic/topic.module#TopicModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartModule' },
  { path: 'user', loadChildren: './user/user.module#UserModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
