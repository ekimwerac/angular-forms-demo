import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-control-demo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-control-demo.component.html',
  styleUrls: ['./form-control-demo.component.css']
})
export class FormControlDemoComponent implements OnInit {
  name = new FormControl('');

  ngOnInit(): void {
    // Subscribe to observable and log changes
    this.name.valueChanges.subscribe(value => {
      console.log('FormControl Value Changed:', value);
    });
  }

  updateName() {
    this.name.setValue('Updated Name');
  }
}
