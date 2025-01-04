import { Injectable } from '@angular/core';

export interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private employees: Employee[] = [
    { id: 1, name: 'Shraddha Jamakhandi', position: 'Developer', department: 'IT' },
    { id: 2, name: 'Shreya', position: 'Designer', department: 'UX/UI' },
  ];

  getEmployees(): Employee[] {
    return this.employees;
  }

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  updateEmployee(updatedEmployee: Employee): void {
    const index = this.employees.findIndex((e) => e.id === updatedEmployee.id);
    if (index !== -1) {
      this.employees[index] = updatedEmployee;
    }
  }

  deleteEmployee(id: number): void {
    this.employees = this.employees.filter((e) => e.id !== id);
  }
}
