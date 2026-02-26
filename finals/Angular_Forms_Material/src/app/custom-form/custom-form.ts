import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf, JsonPipe } from '@angular/common';  // <-- Import NgIf & JsonPipe

@Component({
  selector: 'app-custom-form-demo',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, JsonPipe], // <-- Add here
  templateUrl: './custom-form.html'
})
export class CustomFormDemo {
  customForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.customForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10,12}$')]],
      department: ['', Validators.required],
      gender: ['', Validators.required],
      agree: [false, Validators.requiredTrue]
    });
  }

  get f() { return this.customForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.customForm.invalid) return;
    alert('Custom Form Submitted Successfully!');
  }
}
