import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { EmployeeService }   from './employee.services';
import { EmployeeListComponent }   from './employee-list.component';
import { EmployeeDetailComponent }   from './employee-details.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ,EmployeeService,EmployeeListComponent, EmployeeDetailComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
