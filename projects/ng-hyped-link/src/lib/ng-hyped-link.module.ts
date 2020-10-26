import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgHypedLinkComponent } from './ng-hyped-link.component';



@NgModule({
  declarations: [NgHypedLinkComponent],
  imports: [
    CommonModule
  ],
  exports: [NgHypedLinkComponent]
})
export class NgHypedLinkModule { }
