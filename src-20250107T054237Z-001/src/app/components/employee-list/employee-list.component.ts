import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  imports: [NgIf,NgFor,RouterLink],
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent {
 
  Employee:any = [];
  
  constructor(private apiService: ApiService) { 
    this.readEmployee();
  }

  readEmployee(){
    this.apiService.getEmployees().subscribe((data) => {
     this.Employee = data;
    })    
  }
  removeEmployee(employee:any, index:any) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteEmployee(employee._id).subscribe((data) => {
          console.log('in emp')
          console.log(data)
          this.Employee.splice(index, 1);
        }
      )    
    }
  }
}
