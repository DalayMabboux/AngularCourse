import { Component, Input } from '@angular/core';

@Component({
  selector: 'name-summary',
  template: `
    {{textToShow}} {{enteredName}}
    <name-input (nameEnteredEmitter)="textChanged($event)"></name-input>
  `

})
export class NameSummaryComponent {
  @Input() textToShow:string = "The name you entered is:";
  enteredName = '';

  textChanged(text) {
      this.enteredName = text;
  }
}
