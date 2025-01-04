import { Component } from '@angular/core';
import { DataService, Employee} from '../../services/data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crud-table',
  standalone:true,
  imports:[FormsModule,CommonModule],
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.css'],
})
export class CrudTableComponent {
  employees: Employee[] = [];
  isEditing: boolean = false;
  currentEmployee: Employee = { id: 0, name: '', position: '', department: '' };

  constructor(private dataService: DataService) {
    this.employees = this.dataService.getEmployees();
  }

  addEmployee() {
    if (!this.currentEmployee.id) {
      this.currentEmployee.id = Math.max(...this.employees.map(e => e.id), 0) + 1;
      this.dataService.addEmployee({ ...this.currentEmployee });
    } else {
      this.dataService.updateEmployee({ ...this.currentEmployee });
      this.isEditing = false;
    }
    this.currentEmployee = { id: 0, name: '', position: '', department: '' };
    this.employees = this.dataService.getEmployees();
  }

  editEmployee(employee: Employee) {
    this.currentEmployee = { ...employee };
    this.isEditing = true;
  }

  deleteEmployee(id: number) {
    this.dataService.deleteEmployee(id);
    this.employees = this.dataService.getEmployees();
  }
}
