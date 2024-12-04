import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-control-demo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './custom-control-demo.component.html',
  styleUrls: ['./custom-control-demo.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomControlDemoComponent),
      multi: true
    }
  ]
})
export class CustomControlDemoComponent implements ControlValueAccessor {
  isChecked = false; // Value managed by the control
  onChange = (value: boolean) => {};
  onTouched = () => {};

  // Called when the checkbox value changes
  toggle() {
    this.isChecked = !this.isChecked;
    this.onChange(this.isChecked);
  }

  // ControlValueAccessor methods
  writeValue(value: boolean): void {
    this.isChecked = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
