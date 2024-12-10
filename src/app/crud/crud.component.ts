import { Component } from '@angular/core';

@Component({
  selector: 'app-crud',
  standalone: false,
  
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {
  formData: any = {
    name: '',
    lastName: '',
    fatherName: '',
    phone: '',
    email: '',
    address: ''
  };

  dataSource: any[] = [];
  displayedColumns: string[] = ['name', 'lastName', 'fatherName', 'phone', 'email', 'address', 'actions'];

  editingIndex: number | null = null;

  onSubmit() {
    if (this.formData.name && this.formData.lastName && this.formData.phone && this.formData.email) {
      if (this.editingIndex !== null) {
        this.dataSource[this.editingIndex] = { ...this.formData };
        this.editingIndex = null;
      } else {
        this.dataSource.push({ ...this.formData });
      }
      this.dataSource = [...this.dataSource]; // Ensure table updates
      this.resetForm();
    }
  }
  

  onEdit(element: any) {
    this.formData = { ...element };
    this.editingIndex = this.dataSource.indexOf(element);
  }

  onDelete(element: any) {
    this.dataSource = this.dataSource.filter((item) => item !== element);
    this.dataSource = [...this.dataSource]; // Ensure table updates
  }

  resetForm() {
    this.formData = {
      name: '',
      lastName: '',
      fatherName: '',
      phone: '',
      email: '',
      address: ''
    };
  }
}