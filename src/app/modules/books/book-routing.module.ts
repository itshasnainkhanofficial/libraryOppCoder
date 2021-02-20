import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookaddComponent } from './bookadd/bookadd.component';
import { BookslistComponent } from './bookslist/bookslist.component';
import { AdminGuard } from '../auth/resources/guards/admin.guard';

const routes: Routes = [
  
  { 
    path: 'addbook',
    canActivate: [AdminGuard],
    component: BookaddComponent
  
  },
  {path : "booklist" , component : BookslistComponent},

  { path: '', redirectTo: 'bookadd', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
