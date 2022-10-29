import { Component, OnInit } from '@angular/core';
import { Course } from '../models/home.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id: any = '';
  user: Course = new Course('','','','','','','');
  constructor() { }

  ngOnInit(): void {
  }

}
