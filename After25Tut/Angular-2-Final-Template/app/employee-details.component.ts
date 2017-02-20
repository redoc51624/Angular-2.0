import { Component,OnInit} from '@angular/core';
import { EmployeeService } from './employee.services';


@Component({
  selector: 'employee-detail',
  templateUrl: './employee-details.component.html'
})
export class EmployeeDetailComponent implements OnInit{
    employees=[];
  constructor(private _employeeService : EmployeeService){}
  ngOnInit(){
    this.employees = this._employeeService.getEmployees();
  }
}
