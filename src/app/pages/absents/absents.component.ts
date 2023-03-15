import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Student, STUDENTS } from 'src/app/mocks/classe.mock';
import { SelectionService } from 'src/app/service/selection.service';


@Component({
  selector: 'app-absents',
  templateUrl: './absents.component.html',
  styleUrls: ['./absents.component.css']
})

export class AbsentsComponent implements OnInit {

 
  student: Student[] = STUDENTS; 
  absentForm! : FormGroup; 
  absentStudent!: Student[]; 
  result!: Student;

  constructor(private formbuilder: FormBuilder, private studentService: SelectionService) {} 

  //on appelle toutes les méthodes qu'on a créé dans notre servie pour les initialiser sur notre page


 //on initialise le tout!
  ngOnInit(): void {

    this.initForm() 
    this.absentStudent= this.studentService.getStudent() 
  }




  // on veut ajouter des collègues à la liste des absents
addElement(){

  this.studentService.addStudent(this.absentForm.value.student) 
  this.absentStudent= this.studentService.getStudent() 
  console.log(this.absentStudent); 
  // this.student.isAbsent === true;
}




// on initialise notre formulaire d'absents
initForm(){
  this.absentForm= this.formbuilder.group({
    student: null
  })

}

 // Si on veux supprimer un collègue de la liste des absents
removeElement(idStudent: number): void{
  this.studentService.removeElement(idStudent);
  this.absentStudent= this.studentService.getStudent()
}

// J'ai tenté un truc... c'est pas bon mais au moins j'ai tenté
isAbsent() {
  this.addElement();
  this.result.isAbsent === true;
}

isPresent() {
  
  this.result.isAbsent === false;
}

}
