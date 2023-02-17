import { Component } from '@angular/core';
import { STUDENTS, Student } from 'src/app/mocks/classe.mock';

@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.css']
})

export class TirageComponent {

  gens: Student[] = STUDENTS;
  result!: Student;
  winner: string = "Personne n’a été sélectionné actuellement 👀";

  fonction(gens: Student[]){

    const rand = Math.random();
    const totalEleves = gens.length;
    const randIndex = Math.floor(rand * totalEleves);
    const randomEleves = gens[randIndex];


    return randomEleves;
  }

  sentenceIrrevocable() {
    this.result! = this.fonction(this.gens); 

     if(this.result){
       this.winner = "Tu es la grande gagnante"
     } else{
       this.winner = "tu es le grand gagnant"
     }
  }

  
}

