interface Istudentdetails {
    print_details();
};
class Student implements Istudentdetails{
    private name :string;
    private roll_no : number;
    private mark_1 : number;
    private mark_2 : number;
    private mark_3 :number;
    private Grade : string =" ";

    constructor(sname:string,srollno:number,smark1 :number,smark2:number,smark3:number ){
        this.name =sname;
        this.roll_no =srollno;
        this.mark_1 = smark1;
        this.mark_2 = smark2;
        this.mark_3 = smark3;

    }
    get _name(){
        return this.name
    }

    get _rollno(){
        return this.roll_no
    }
    get _mark1(){
        return this.mark_1
    }

    get _mark2(){
        return this.mark_2
    }

    get _mark3(){
        return this.mark_3
    }
    
    set _mark1(val:any){
        this.mark_1= val
    }
    set _mark2(val:any){
        this.mark_2 = val;
    }
    set _mark3 (val:any){
        this.mark_3 = val;

    }

    total(){
        return this._mark1 + this._mark2 + this.mark_3
    }

    average(){
        return this.total()/3;
        
    }

    _grade(){
        if (this.average() >= 90) {
            this.Grade = "A";
        } else if (this.average() >= 80) {
            this.Grade = "B";
        } else if (this.average() >= 70) {
            this.Grade = "C";
        } else if (this.average() >= 60) {
            this.Grade = "D";
        } else {
            this.Grade = "F";
        }
    }

    print_details(){
        console.log(this.name);
        console.log(this.roll_no);
        console.log(this.mark_1);
        console.log(this.mark_2);
        console.log(this.mark_3);
        console.log(this.total());
        console.log(this.average());
        this._grade();
        console.log(this.Grade);
    }
    }

    let newperson = new student("Gokul", 101, 68,89,98);
    newperson.print_details();
    newperson._mark1 = 100;
    newperson._mark2 = 90;
    newperson._mark3 = 97;
    newperson.print_details();
    

    

        
       


    