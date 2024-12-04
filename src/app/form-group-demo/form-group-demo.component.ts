import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common'; // Import JsonPipe for | json

@Component({
  selector: 'app-form-group-demo',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe], // Add JsonPipe here
  templateUrl: './form-group-demo.component.html',
  styleUrls: ['./form-group-demo.component.css']
})
export class FormGroupDemoComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });

  ngOnInit(): void {
    this.profileForm.valueChanges.subscribe((value) => {
      console.log('FormGroup Value Changed:', value);
    });
  }

  logValues() {
    console.log('Profile Form Values:', this.profileForm.value);
  }
}
