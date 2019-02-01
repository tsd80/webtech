'use strict';
class Human {
  constructor(name, born) {
    this._name = name;
    this._born = born;
  }

  age() {
    return Date().getYear - this._born;
  }

  getName() {
    return this._name;
  }

  live() {
    return 'breathe, breathe, breathe';
  }
}

class CourseRecord {
  constructor(name, credits, grade) {
    this._name = name;
    if (credits > 15) {
      this._credits = 15;
    } else if (credits<0) {
      this._credits = 0;
    } else {
      this._credits = credits;
    }
    if (grade > 5) {
      this._grade = 5;
    } else if (grade<0) {
      this._grade =0;
    } else {
      this._grade = grade;
    }
  }
}

class Student extends Human {
  constructor(studentId, name, born) {
    super(name, born);
    this._studentId = studentId;
    this._coursesDone = [];
  }

  courseDone(name) {
    for (let i = 0; i < this._coursesDone.length; i++) {
      if (this._coursesDone[ i ]._name === name) {
        return true;
      }
    }
    return false;
  }

  courseDone1(name) {
    return this._coursesDone.filter((e) => e._name === name).length === 1;
  }

  courseCompleted(courseRecord) {
    if (!this.courseDone(courseRecord._name)) {
      this._coursesDone.push(courseRecord);
    }
  }

  totalCredits() {
    let sum = 0;
    for (let i = 0; i < this._coursesDone.length; i++) {
      if (this._coursesDone[i]._grade>0) {
        sum += this._coursesDone[i]._credits;
      }
    }
    return sum;
  }

  totalCredits1() {
    return this._coursesDone.reduce((acc, e) => acc + e._credits, 0);
  }

  avgGrade() {
    let sum = 0, x=0;
    for (let i = 0; i < this._coursesDone.length; i++) {
      sum += this._coursesDone[ i ]._grade; x++;
    }
    return sum/x;
  }

  live() {
    return `${super.live()}, study, study, study`;
  }
}

class MetropoliaStudent extends Student {
  constructor (studentId, name, born) {
    super(studentId,name,born);
    this._metkaActivity = 0;
    this._metkaDone = false;
  }
  participateInMetka () {
    if (!this._metkaDone) {
      this._metkaActivity++;
      if (this._metkaActivity===4) {
        this._metkaDone=true;
        super.courseCompleted(new CourseRecord('Metka',1,5));
      }
    }
  }
}

const ms=new MetropoliaStudent(999,'Tauno', 1990);

console.log(ms);
ms.participateInMetka();
ms.participateInMetka();
ms.participateInMetka();
console.log(ms);
ms.participateInMetka();
console.log(ms);
ms.participateInMetka();
console.log(ms);

ms.courseCompleted(new CourseRecord('TX00CS20', 16, 6));
ms.courseCompleted(new CourseRecord('TX00CS21', -1, 4));
ms.courseCompleted(new CourseRecord('TX00CS22', 15, 3));
ms.courseCompleted(new CourseRecord('TX00CS23', 15, 5));
ms.courseCompleted(new CourseRecord('TX00CS24', 5, -1));
ms.courseCompleted(new CourseRecord('TX00CS25', 15, 3));
console.log(ms);

console.log('107: '+`${ms.getName()} Total Credits: ${ms.totalCredits()}, Average Grade: ${ms.avgGrade().toFixed(2)}`);
