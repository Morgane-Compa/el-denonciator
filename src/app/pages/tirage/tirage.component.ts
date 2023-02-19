import { Component } from '@angular/core';
import { STUDENTS, Student } from 'src/app/mocks/classe.mock';
import { SelectionService } from 'src/app/service/selection.service';

@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.css']
})

export class TirageComponent {

  //ma classe d'élève 
  gens: Student[] = STUDENTS;
  //il faut que je réussice a retirer mes collèges absent de ma classe donc j'ai importé ma liste de collègues absents (mais je sais pas encore comment m'y prendre)
  absentStudent!: Student[]; 
  result!: Student;
  winner: string = "Personne n’a été sélectionné actuellement 👀";

  constructor( private studentService: SelectionService) {} 

  // on créé une fonction pour lier notre mock a noter page et pour choisir un nom dans notre tableau d'élèves 
  // je vais également essayer d'enlever de la liste d'élève les absents au total d'élèves 
  fonction(gens: Student[], absent: Student[]){

    const rand = Math.random();
    //pour linstant je ne sais pas comment faire pour les absents mais ça viendra
    const totalAbsents = absent.length;
    
    const totalEleves = gens.length;
    const randIndex = Math.floor(rand * totalEleves);
    const randomEleves = gens[randIndex];

    // on retourne le résultat pour le sauvegarder et pouvoir l'afficher avec la fonction suivante
    return randomEleves;
  }


  // on créer une fonction pour "activer la fonction précédente" et on y rajoute le le facteur de genre
  
  sentenceIrrevocable() {
    this.result! = this.fonction(this.gens, this.absentStudent); 

     if(this.result.gender === 'female'){ 
       this.winner = "Tu es la grande gagnante"
     } else{ 
       this.winner = "tu es le grand gagnant"
     }
  }


  
}

