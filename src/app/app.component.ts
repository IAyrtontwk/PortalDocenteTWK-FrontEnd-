import { Component } from '@angular/core';
import { StudentsService } from './services/students.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoTWK';

  students: any = {};

constructor(private service: StudentsService){
}
rgOnInit(): void {
  this.service.getALLstudents().subscribe(students => {
    this.students = students.results;
  })
  console.log(this.students);
}

}

export class students{
      nombre!: String;
      apellido!: String;
      id?: Number;
}

constructor(); {
      nombre: String;
      apellido: String;
      id: Number;
}

  function constructor() {
  throw new Error('Function not implemented.');
  }


