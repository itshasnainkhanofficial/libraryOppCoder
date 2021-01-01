import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookaddComponent } from './bookadd/bookadd.component';
import { BookslistComponent } from './bookslist/bookslist.component';


const routes: Routes = [
  { path: 'bookadd', component: BookaddComponent },
  {path : "booklist" , component : BookslistComponent}
//   {
//     path: 'cart',
//     loadChildren: () => import('../cart/cart.module').then((m) => m.CartModule),
//   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
