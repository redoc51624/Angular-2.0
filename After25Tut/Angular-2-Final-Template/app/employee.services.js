"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var EmployeeService = (function () {
    function EmployeeService() {
    }
    EmployeeService.prototype.getEmployees = function () {
        return [{ "id": "1", "name": "vikas", "gender": "male" },
            { "id": "2", "name": "Nandan", "gender": "male" },
            { "id": "3", "name": "ved", "gender": "male" },
            { "id": "4", "name": "kriti", "gender": "female" },
            { "id": "5", "name": "Soniya", "gender": "female" },
        ];
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    core_1.Injectable()
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.services.js.map