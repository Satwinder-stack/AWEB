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
import { MatSliderModule } from '@angular/material/slider'; // Missing this!
import { MatSlideToggleModule } from '@angular/material/slide-toggle'; // Missing this!

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
    MatSliderModule,      // Ensure this is here
    MatSlideToggleModule  // Ensure this is here
  ],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class Register {
  isDarkMode = false;
  submitted = false;

  // Class properties for mapping
  userName = '';
  email = '';
  password = '';
  phoneNumber = '';
  userRole = '';
  eventRole = '';
  gender = '';
  address = '';
  bio = '';
  birthDate: Date | null = null;
  angularSkillLevel = 5;

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
    // Validation: Min 8 chars, alphanumeric, starts with a letter
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^[a-zA-Z][a-zA-Z0-9]*$/)
    ]),
    // Validation: Year must be 2006 or below
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

  onClickSubmit() {
    if (this.formdata.valid) {
      this.submitted = true;
      const data = this.formdata.getRawValue();
      Object.assign(this, data);
      console.log("Success!", data);
    } else {
      this.formdata.markAllAsTouched();
    }
  }
}
