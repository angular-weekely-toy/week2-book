import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  searchControl: string;

  @ViewChild('searchForm') searchField: ElementRef;
  constructor() { }

  ngOnInit() {
  }  

  bookSearch() {
  }

}
