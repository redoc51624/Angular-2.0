import { Component } from '@angular/core';
import { EmployeeService } from './employee.services';

@Component({
  selector: 'my-app',
  template: `<h3>Some Random Company Data</h3>
  <employee-list></employee-list>
  <employee-detail></employee-detail>`,
  providers:[EmployeeService]
 })
export class AppComponent { }
