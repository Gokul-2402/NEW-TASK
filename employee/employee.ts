class EmployeeSalary{
    EmployeeId : number
    Employee_name : string
    Employee_salary : number


    constructor(employeeid:number,employeename: string,employeesalary:number){
        this.EmployeeId=employeeid;
        this.Employee_name = employeename;
        this.Employee_salary = employeesalary

    }

    hra (){
        let hra_sal : number = 0.20 * this.Employee_salary
        return hra_sal;
    }

    Da (){
        let Da_sal :number = 0.10* this.Employee_salary
        return Da_sal;
    }

    grosssalary(){
        return this.Employee_salary + this.hra() + this.Da()
    }

    print_details(){
        console.log(`HRA: ${this.hra()}`);
        console.log(`DA: ${this.Da()}`);
        console.log(`Gross Salary: ${this.grosssalary()}`);

    }
    
}

let empobj = new EmployeeSalary(1,"Gokul",20000);
empobj.print_details();


