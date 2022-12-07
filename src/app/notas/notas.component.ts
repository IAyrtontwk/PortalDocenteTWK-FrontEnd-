import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  my_notes= [
    {id:1,  value: '5.7', Description:''}, 
    {id:2,  value: '5.6', Description:''},
    {id:3,  value: '7.0', Description:''},
    {id:4,  value: '6.5', Description:''},
    {id:5,  value: '6.8' ,Description:''},
  ];
  

  note= {id:1, value:null, description:null};
  show_form =false;
  editing= false;


  editNote(){
    this.show_form= true;
  }
  
  viewNote(note:any){
    this.editing= true;
    this.note= note;
    this.show_form= true;
  }
  
  saveNote(){
    this.show_form= false;
    this.show_form= true;
    if(this.editing){
      const me =this;
      this.my_notes.forEach(function(element, index){})
      alert('modo editar')
    }else{
      this.note.id= Date.now();
      this.my_notes.push();
      this.note= {id:1, value: null, description: null};
    }

  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
