import { Component,OnInit} from '@angular/core';
import { EmployeeService } from './employee.services';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html'

})
export class EmployeeListComponent implements OnInit{
  employees=[];
  constructor(private _employeeService : EmployeeService){}
  ngOnInit(){
    this.employees = this._employeeService.getEmployees();
  }
}
