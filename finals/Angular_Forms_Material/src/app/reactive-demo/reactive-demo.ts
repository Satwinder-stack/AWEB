import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-demo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-demo.html',
  styleUrls: ['./reactive-demo.css']
})
export class ReactiveDemo {

  reactiveForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{11}$/)]),
    role: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    comments: new FormControl(''),
    age: new FormControl('', Validators.required),
    department: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required)
  });

  // submit function
  onSubmit(): void {
    if (this.reactiveForm.valid) {
      console.log(this.reactiveForm.value); // logs all values in console
      alert('Reactive Form Submitted Successfully!');
      this.reactiveForm.reset();
    } else {
      this.reactiveForm.markAllAsTouched(); // highlights validation errors
    }
  }

  // getter for template access
  get f(): { [key: string]: any } {
    return this.reactiveForm.controls;
  }
}
