import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

// Material Imports
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule,
    MatSliderModule,
    MatSlideToggleModule
  ],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class Register {
  isDarkMode = false;
  submitted = false;

  // --- VERSION 1: NO VALIDATION ---
  formdataNoValidation = new FormGroup({
    userName: new FormControl('', { nonNullable: true }),
    email: new FormControl('', { nonNullable: true }),
    phoneNumber: new FormControl('', { nonNullable: true }),
    userRole: new FormControl('developer', { nonNullable: true }),
    eventRole: new FormControl('attendee', { nonNullable: true }),
    address: new FormControl('', { nonNullable: true }),
    bio: new FormControl('', { nonNullable: true }),
    gender: new FormControl('male', { nonNullable: true }),
    angularSkillLevel: new FormControl(5, { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
    birthDate: new FormControl<Date | null>(null)
  });

  // --- VERSION 2: ORIGINAL WITH VALIDATION ---
  formdata = new FormGroup({
    userName: new FormControl('', { validators: [Validators.required], nonNullable: true }),
    email: new FormControl('', { validators: [Validators.required, Validators.email], nonNullable: true }),
    phoneNumber: new FormControl('', { validators: [Validators.required], nonNullable: true }),
    userRole: new FormControl('developer', { validators: [Validators.required], nonNullable: true }),
    eventRole: new FormControl('attendee', { validators: [Validators.required], nonNullable: true }),
    address: new FormControl('', { nonNullable: true }),
    bio: new FormControl('', { validators: [Validators.maxLength(150)], nonNullable: true }),
    gender: new FormControl('male', { validators: [Validators.required], nonNullable: true }),
    angularSkillLevel: new FormControl(5, { validators: [Validators.required], nonNullable: true }),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^[a-zA-Z][a-zA-Z0-9]*$/)
    ]),
    birthDate: new FormControl<Date | null>(null, [
      Validators.required,
      this.ageValidator
    ])
  });

  ageValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;
    const birthYear = new Date(control.value).getFullYear();
    return birthYear <= 2006 ? null : { tooYoung: true };
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }

  // Submit for the No-Validation form
  onClickSubmitNoVal() {
    console.log("No-Validation Form submitted:", this.formdataNoValidation.getRawValue());
    alert("Form 1 Submitted (No Validation check performed)");
  }

  // Submit for the Original form
  onClickSubmit() {
    if (this.formdata.valid) {
      this.submitted = true;
      console.log("Original Form Success!", this.formdata.getRawValue());
    } else {
      this.formdata.markAllAsTouched();
    }
  }
}
