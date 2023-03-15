import { Component } from '@angular/core';
import { STUDENTS, Student } from 'src/app/mocks/classe.mock';


@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.css']
})

export class TirageComponent {

  //ma classe d'élève 
  gens: Student[] = STUDENTS;

  result!: Student;
  winner: string = "Personne n’a été sélectionné actuellement 👀";

  // on créé une fonction pour lier notre mock a noter page et pour choisir un nom dans notre tableau d'élèves 
  // je vais également essayer d'enlever de la liste d'élève les absents au total d'élèves 
  fonction(gens: Student[]){

    const rand = Math.random();
    //pour linstant je ne sais pas comment faire pour les absents mais ça viendra

    const totalEleves = gens.length;
    const randIndex = Math.floor(rand * totalEleves);
    const randomEleves = gens[randIndex];

    // on retourne le résultat pour le sauvegarder et pouvoir l'afficher avec la fonction suivante
    return randomEleves;
  }

  // on créer une fonction pour "activer la fonction précédente" et on y rajoute le le facteur de genre
  
  sentenceIrrevocable() {
    this.result! = this.fonction(this.gens); 

    if (this.result.gender === 'female' && !this.result.isAbsent && !this.result.isSelected) { 

      this.winner = "Tu es la grande gagnante";
      // Je change la donnée isSelected de mon mock pour que l'élève ne soit pas selectionné de nouveau
      this.result.isSelected = true;
      
     } else if (this.result.gender === 'male' && !this.result.isAbsent && !this.result.isSelected) {
      
      this.winner = "tu es le grand gagnant";
      this.result.isSelected = true;
      
     } else{ 
      //  this.result === null,
      // La ligne du dessus, c'est ce que j'avais mis au début (parce que je suis une patate) mais je préfère la laisser car je trouve important de mettre aussi mes erreurs (cela dit je suis pas sure quec ce que j'ai mis soit mieux²²). 
       this.sentenceIrrevocable()
     }
  }
}

