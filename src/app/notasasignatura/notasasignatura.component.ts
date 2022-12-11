import { Component, OnInit } from '@angular/core';
import { Course } from '../models/home.model';
import { Student } from '../models/student.model';
import { Qualification } from '../models/qualif.model';
import { SubjectService } from '../services/subject.service';
import { StudentsService } from '../services/student.service';
import { QualificationService } from '../services/qualification.service';
// import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notasasignatura',
  templateUrl: './notasasignatura.component.html',
  styleUrls: ['./notasasignatura.component.css'],
})
export class NotasasignaturaComponent implements OnInit {
  subject: Course = new Course('', '', '', '', '', '', '');
  studentsList: Student[] = [];
  qualifsSubject: Qualification[] = [];
  codeSubject: string = '';
  editQualifs: boolean = false;
  constructor(
    private subjectService: SubjectService,
    private studentService: StudentsService,
    private qualifService: QualificationService,
    private aRoute: ActivatedRoute
  ) {
    this.codeSubject = aRoute.snapshot.paramMap.get('code')!;
    // console.log(this.codeSubject);
    this.subjectService.getSubjectByCode(this.codeSubject).subscribe(
      (data) => {
        this.subject = data.subject[0];
        // console.log(this.subject);
        this.studentService.getStudentsBySubject(this.subject._id).subscribe(
          (res) => {
            // console.log(res.response);
            this.studentsList = res.response;
            // console.log(this.studentsList);
          },
          (error) => {
            console.log(error);
          }
        );
        this.qualifService
          .getQualificationsBySubject(this.subject.code)
          .subscribe((ok) => {
            this.qualifsSubject = ok.qualification;
            console.log(this.qualifsSubject);
          });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {}

  editQualifsBtn = () => {
    console.log('BTN EDIT Qualif')
  };

  promNotas = () => {};
}
