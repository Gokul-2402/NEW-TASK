;
var student = /** @class */ (function () {
    function student(sname, srollno, smark1, smark2, smark3) {
        this.Grade = " ";
        this.name = sname;
        this.roll_no = srollno;
        this.mark_1 = smark1;
        this.mark_2 = smark2;
        this.mark_3 = smark3;
    }
    Object.defineProperty(student.prototype, "_name", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(student.prototype, "_rollno", {
        get: function () {
            return this.roll_no;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(student.prototype, "_mark1", {
        get: function () {
            return this.mark_1;
        },
        set: function (val) {
            this.mark_1 = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(student.prototype, "_mark2", {
        get: function () {
            return this.mark_2;
        },
        set: function (val) {
            this.mark_2 = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(student.prototype, "_mark3", {
        get: function () {
            return this.mark_3;
        },
        set: function (val) {
            this.mark_3 = val;
        },
        enumerable: false,
        configurable: true
    });
    student.prototype.total = function () {
        return this._mark1 + this._mark2 + this.mark_3;
    };
    student.prototype.average = function () {
        return this.total() / 3;
    };
    student.prototype._grade = function () {
        if (this.average() >= 90) {
            this.Grade = "A";
        }
        else if (this.average() >= 80) {
            this.Grade = "B";
        }
        else if (this.average() >= 70) {
            this.Grade = "C";
        }
        else if (this.average() >= 60) {
            this.Grade = "D";
        }
        else {
            this.Grade = "F";
        }
    };
    student.prototype.print_details = function () {
        console.log(this.name);
        console.log(this.roll_no);
        console.log(this.mark_1);
        console.log(this.mark_2);
        console.log(this.mark_3);
        console.log(this.total());
        console.log(this.average());
        this._grade();
        console.log(this.Grade);
    };
    return student;
}());
var newperson = new student("Gokul", 101, 68, 89, 98);
newperson.print_details();
newperson._mark1 = 100;
newperson._mark2 = 90;
newperson._mark3 = 97;
newperson.print_details();
