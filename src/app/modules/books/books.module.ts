import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookaddComponent } from './bookadd/bookadd.component';
import { BookslistComponent } from './bookslist/bookslist.component';
import { BooksRoutingModule } from './book-routing.module';



@NgModule({
  declarations: [BookaddComponent, BookslistComponent],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
