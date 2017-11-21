import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { NameInputComponent } from './nameInput.component';
import { NameSummaryComponent } from './nameSummary.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    NameSummaryComponent,
    NameInputComponent
  ],
  exports: [NameSummaryComponent],
  bootstrap: [NameSummaryComponent]
})
export class AppModule {
}