import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // For *ngFor and other common directives

@Component({
  selector: 'app-form-array-demo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], // Import required modules
  templateUrl: './form-array-demo.component.html',
  styleUrls: ['./form-array-demo.component.css']
})
export class FormArrayDemoComponent implements OnInit {
  form: FormGroup; // Parent FormGroup containing the FormArray

  constructor(private fb: FormBuilder) {
    // Initialize the FormGroup with a FormArray containing one FormControl
    this.form = this.fb.group({
      phoneNumbers: this.fb.array([this.fb.control('')])
    });
  }

  ngOnInit(): void {
    // Subscribe to the valueChanges observable of the FormArray to log changes
    this.phoneNumbers.valueChanges.subscribe((value) => {
      console.log('FormArray Value Changed:', value);
    });
  }

  // Getter to access the FormArray from the FormGroup
  get phoneNumbers(): FormArray {
    return this.form.get('phoneNumbers') as FormArray;
  }

  // Add a new FormControl to the FormArray
  addPhoneNumber() {
    this.phoneNumbers.push(this.fb.control(''));
  }

  // Helper to cast AbstractControl to FormControl
  getFormControl(control: any): FormControl {
    return control as FormControl;
  }
}
