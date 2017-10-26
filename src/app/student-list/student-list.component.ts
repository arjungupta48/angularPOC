import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students = [];

  constructor(private _studentService: StudentService) { }

  ngOnInit() {
    this._studentService.getStudents()
            .subscribe(resStudentData => this.students = resStudentData);
  }

}
