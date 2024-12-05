import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf

@Component({
  selector: 'app-template-driven-forms-demo',
  standalone: true,
  imports: [FormsModule, CommonModule], // Add CommonModule to imports
  templateUrl: './template-driven-forms-demo.component.html',
  styleUrls: ['./template-driven-forms-demo.component.css']
})
export class TemplateDrivenFormsDemoComponent {
  /**
   * The model representing form data.
   * Why: Template-driven forms bind directly to a model in the component.
   */
  user = {
    name: '',
    email: '',
    age: null
  };

  /**
   * Handles the form submission.
   * Why: To programmatically interact with form data or take action on submission.
   */
  onSubmit(form: any) {
    console.log('Form Submitted:', form.value);
    console.log('Form Validity:', form.valid);
  }
}
