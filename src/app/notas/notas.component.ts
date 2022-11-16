import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  notes= [
    {id:1, title: '', value: '0.0'}, 
    {id:2, title: '', value: '0.0'},
    {id:3, title: '', value: '0.0'},
    {id:4, title: '', value: '0.0'},
    {id:5, title: '', value: '0.0'},
  ];
   

  note= {title:null,value:null};
  show_list= true


  Edit(){
    this.show_list= true
    if(this.show_list == true){
      console.log('')
      
    
    }else{
      Error()
      
    }
    
  }

  Save(){
    this.show_list= true
    if (this.show_list== true){
      console.log('')

    }else{
      Error()

    }
    
      
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
