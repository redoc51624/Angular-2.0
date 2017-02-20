import { Injectable } from '@angular/core';
@Injectable()

export class EmployeeService {
  getEmployees(){
    return [  {"id": "1","name":"vikas",  "gender":"male"},
              {"id": "2","name":"Nandan", "gender":"male"},
              {"id": "3","name":"ved",    "gender":"male"},
              {"id": "4","name":"kriti",  "gender":"female"},
              {"id": "5","name":"Soniya", "gender":"female"},
              ]
  }
}
