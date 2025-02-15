import { Component, inject } from '@angular/core';
import { GameService } from '../../game.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view',
  standalone: false,
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  gameService: GameService = inject(GameService);
  wordForm: FormGroup;
  wordFormBuilder = inject(FormBuilder);

  constructor() {
    this.wordForm = this.wordFormBuilder.group({
      l1: ['', Validators.required],
      l2: ['', Validators.required],
      l3: ['', Validators.required],
      l4: ['', Validators.required],
      l5: ['', Validators.required]
    })
  }

  typeOfLetter(letter: string) {
    let guessedWords = this.gameService.getGuessedWords();
    let color = 'gray';
    for (let word of guessedWords) {
      for (let index = 0; index < word.length; index++) {
        let c = (word[index] == letter.toLowerCase()) && this.typeOfLetterInWord(word[index], index);
        // console.log(c)
        switch (c) {
          case 'green':
            return 'green'
          case 'yellow':
            color = 'yellow';
            break;
          case 'gray':
            color = 'red';  // this is a bit confusing but makes sense
        }
      }
    }
    // console.log(color)
    return color;
  }

  typeOfLetterInWord(letter: string, index: number): string {
    if (this.gameService.secret[index] == letter)
      return 'green';
    else if (this.gameService.secret.includes(letter))
      return 'yellow';
    else
      return 'gray';
  }

  getGuessedWords(): string[] {
    return this.gameService.getGuessedWords();
  }

  guessWord() {
    let w = this.wordForm.value;
    let word = `${w['l1']}${w['l2']}${w['l3']}${w['l4']}${w['l5']}`;
    let wordL = [w['l1'], w['l2'], w['l3'], w['l4'], w['l5']];
    // console.log(word)
    for (let l of wordL) {
      if (!'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.includes(l)) return;
    }

    this.gameService.guessWord(word)
    this.wordForm.reset()
    // console.log(this.gameService.gameState)
  }
}
