var EmployeeSalary = /** @class */ (function () {
    function EmployeeSalary(employeeid, employeename, employeesalary) {
        this.EmployeeId = employeeid;
        this.Employee_name = employeename;
        this.Employee_salary = employeesalary;
    }
    EmployeeSalary.prototype.hra = function () {
        var hra_sal = 0.20 * this.Employee_salary;
        return hra_sal;
    };
    EmployeeSalary.prototype.Da = function () {
        var Da_sal = 0.10 * this.Employee_salary;
        return Da_sal;
    };
    EmployeeSalary.prototype.grosssalary = function () {
        return this.Employee_salary + this.hra() + this.Da();
    };
    EmployeeSalary.prototype.print_details = function () {
        console.log("HRA: ".concat(this.hra()));
        console.log("DA: ".concat(this.Da()));
        console.log("Gross Salary: ".concat(this.grosssalary()));
    };
    return EmployeeSalary;
}());
var empobj = new EmployeeSalary(1, "Gokul", 20000);
empobj.print_details();
// console.log(` EMPLOYEE HRA :${empobj.hra()}`);
// console.log(` EMPLOYEE DA : ${empobj.Da()}`);
// console.log(` EMPLOYEE GROSS SALARY : ${empobj.grosssalary()}`);
