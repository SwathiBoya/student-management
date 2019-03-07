import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { STUDENTS } from '../studentmock';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students = STUDENTS;
  student: Student = {
    id: 0,
    name: '',
    class:'',
    subject:'',
    schoolname:''
  };
  constructor(private router: Router) { }

  onAdd(){
    if(this.student.name.length == 0)
            {
              alert("Please fill Name");
            }
            else if(this.student.name.length > 0 )
            {
              this.student.id = this.students.length;
              this.student = {
                id: this.students.length + 1,
                name: this.student.name,
                class:this.student.class,
                subject:this.student.subject,
                schoolname:this.student.schoolname

              };
              
          this.students.push(this.student);          
          this.student = {id:0, name:'', subject:'', class:'',schoolname:''};
          alert("Add Sudent");
      }
  }

  onRemove(stdnum){
    var studentList:Student[] = [];
    for(var i = 0;i<this.students.length;i++){
      if(this.students[i].id != stdnum ){
        studentList.push(this.students[i]);
      }
    }
      this.students=studentList;
    }
    onDelete(student){
      for( var i=0; i<this.students.length;i++)
      {
        if(this.students[i].id==student.id){
          this.students.splice(i,1);
        }
      }
    }
  selectedStudent: Student;
  onSelect(student: Student): void {
    this.selectedStudent = student;
  }

  ngOnInit() {
  }

}
