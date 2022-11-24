import { Component, OnInit } from '@angular/core';
import { Course } from '../models/home.model';
import { UserService } from '../services/user.service';
import { SubjectService } from '../services/subject.service';
import { Teacher } from '../models/login.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id: any = '';
  courseList: Course[] = [];
  user: Teacher = new Teacher('','','','','','','');
  constructor(private userService: UserService, subjectService:SubjectService) {
    const rut = localStorage.getItem('userRut');
    subjectService.getSubjectByRut(rut).subscribe(
      data=>{
        console.log(data);
        this.courseList = data;
      },error => {
        console.log(error);
      }
    );
   }

  ngOnInit(): void {
  }

  logout = () => {
    this.userService.logout();
  }

}
