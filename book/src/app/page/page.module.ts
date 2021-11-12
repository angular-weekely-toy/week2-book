import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [PageComponent]
})
export class PageModule { }
