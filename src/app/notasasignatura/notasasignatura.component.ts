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
  qualifStudent: Qualification = new Qualification([], '', '', '');
  qualifSubjecEdit: Qualification[] = [];
  codeSubject: string = '';
  isEdit: boolean = true;
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
            // console.log(this.qualifsSubject);
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
    this.isEdit=false;
    this.qualifSubjecEdit = this.qualifsSubject;
    // this.qualifStudent = this.qualifsSubject[1];

    // console.log(this.qualifsSubject);
    // console.log(this.qualifEdit);
    // console.log(this.qualifStudent);
  };

  updateQualifs = () => {
    console.log('BTN Update QUalifs');
    // console.log(this.qualifStudent);
    console.log(this.qualifSubjecEdit);
    this.qualifSubjecEdit.forEach(
      (qualifStudent) => {
        // console.log(qualifStudent);
        this.qualifService.updateQualification(qualifStudent).subscribe(
          (data) => {
            // console.log(data);
          },
          (error) => {
            console.log(error);
          }
        );

    });
    this.isEdit=true;
    // this.qualifService
    //   .getQualificationsByStudent(this.qualifStudent.studentCode)
    //   .subscribe((data) => {console.log(data)});
  };

  promNotas = () => {};
}
