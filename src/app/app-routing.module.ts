import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookSearchComponent } from './pages/book-search/book-search.component';

const routes: Routes = [
  // { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', component: BookSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
