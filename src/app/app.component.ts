import { Component, OnInit } from '@angular/core';

import  { BooksService } from '../app/sevice/books.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BooksService]
})
export class AppComponent implements OnInit {
  title = 'week2-book';
  constructor(private bookService: BooksService) {

  }
  ngOnInit(): void {
    this.bookService.getBooksTitleSearch('RE')
    .subscribe((val) => console.log('AAAA ', val));
  }
}
