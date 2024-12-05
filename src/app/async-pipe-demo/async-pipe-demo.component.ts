import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common'; // Import AsyncPipe
// import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-async-pipe-demo',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './async-pipe-demo.component.html',
  styleUrls: ['./async-pipe-demo.component.css']
})
export class AsyncPipeDemoComponent {
  /**
   * A FormControl instance to manage the state of an input field.
   * Why: FormControl is the building block of reactive forms, representing a single input field.
   */
  name = new FormControl('');

  /**
   * The valueChanges observable of the FormControl.
   * Why: This observable emits the current value of the FormControl whenever it changes,
   * allowing us to react dynamically to user input.
   */
  nameValueChanges$ = this.name.valueChanges;

  constructor() {
    // Why: You can optionally log the observable stream for debugging purposes.
    this.nameValueChanges$.subscribe((value) => {
      console.log('ValueChanges Observable Emitted:', value);
    });
  }
}
