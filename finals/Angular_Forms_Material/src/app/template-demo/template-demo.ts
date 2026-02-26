import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-demo.html',
  styleUrl: './template-demo.css'
})
export class TemplateDemo {

  username = '';
  email = '';
  password = '';
  role = '';
  gender = '';
  status = '';
  comments = '';

  // NEW FIELDS
  phone = '';
  dob = '';
  address = '';

  submitted = false;

  onSubmit() {
    this.submitted = true;

    console.log({
      username: this.username,
      email: this.email,
      password: this.password,
      role: this.role,
      gender: this.gender,
      status: this.status,
      comments: this.comments,
      phone: this.phone,
      dob: this.dob,
      address: this.address
    });

    alert('Form Submitted Successfully!');
  }
}
