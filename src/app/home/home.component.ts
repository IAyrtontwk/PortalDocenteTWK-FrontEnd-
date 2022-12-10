import { Component, OnInit } from '@angular/core';
import { Course } from '../models/home.model';
import { Teacher } from '../models/login.model';
import { SubjectService } from '../services/subject.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  id: any = '';
  courseList: Course[] = [];
  user: Teacher = new Teacher('', '', '', '', '', '', '');
  constructor(
    private userService: UserService,
    subjectService: SubjectService
  ) {
    const rut = localStorage.getItem('userRut');
    this.user.name = localStorage.getItem('username')!;
    this.user.lastname = localStorage.getItem('lastname')!;
    subjectService.getSubjectByRut(rut).subscribe(
      (data) => {
        // console.log(data);
        this.courseList = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {}

  logout = () => {
    this.userService.logout();
  };
}
