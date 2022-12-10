import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
items: any;
students: any

  constructor() { }

  ngOnInit(): void {
  }

}
