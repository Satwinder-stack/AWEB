import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from './employee';
import { ProductService, Product } from './products';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: true,
  imports: [CommonModule]
})
export class App implements OnInit {

  public employees$!: Observable<Employee[]>;
  public products$!: Observable<Product[]>;

  constructor(
    private employeeService: EmployeeService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.employees$ = this.employeeService.getEmployees();
    this.products$ = this.productService.getProducts();
  }

}
