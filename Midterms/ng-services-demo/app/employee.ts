import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Employee {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private storageKey = 'employees';
  private employees: Employee[] = [];

  constructor() {
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      this.employees = JSON.parse(saved);
    } else {
      this.employees = [
        { id: 101, firstname: 'Joseph', lastname: 'Dizon', email: 'jdizon@hau.edu.ph' },
        { id: 102, firstname: 'James', lastname: 'Atienza', email: 'jatienza@hau.edu.ph' },
        { id: 103, firstname: 'John', lastname: 'Cena', email: 'jcena@hau.edu.ph' },
        { id: 104, firstname: 'Robert', lastname: 'Quintana', email: 'rquintana@hau.edu.ph' },
        { id: 105, firstname: 'Satwinder', lastname: 'Jeerh', email: 'srjeerh@student.hau.edu.ph' }
      ];
      this.saveToStorage();
    }
  }

  getEmployees(): Observable<Employee[]> {
    return of(this.employees);
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
    this.saveToStorage();
  }

  updateEmployee(updated: Employee) {
    const index = this.employees.findIndex(e => e.id === updated.id);
    if (index !== -1) {
      this.employees[index] = updated;
      this.saveToStorage();
    }
  }

  private saveToStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.employees));
  }
}
