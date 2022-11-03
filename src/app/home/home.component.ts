import { Component, OnInit } from '@angular/core';
import { Course } from '../models/home.model';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id: any = '';
  user: Course = new Course('','','','','','','');
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  logout = () => {
    this.userService.logout();
  }

}
