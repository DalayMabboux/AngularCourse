import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'name-input',
  template: `
  <div>
    <p>Please enter your name:</p>
    <input type="text" (input)="enteredName=$event.target.value"/>
    <button (click)="enter()">Enter</button>
  </div>
  `
})
export class NameInputComponent {
  @Output() nameEnteredEmitter = new EventEmitter<string>();

  enteredName: string;

  enter() {
      this.nameEnteredEmitter.emit(this.enteredName);
  }
}
