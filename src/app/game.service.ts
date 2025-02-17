import { Injectable } from '@angular/core';
import { WORDS } from '../data/words';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  guessedWords: string[] = [];
  secret: string = 'hello';
  gameState: string = 'active';

  constructor() {
    this.newGame();
  }

  newGame() {
    this.secret = WORDS[Math.floor(Math.random() * WORDS.length)];
    console.log(this.secret)
    // this.secret = 'helpp';
  }

  guessWord(word: string): boolean {
    if (this.guessedWords.includes(word)) {
      return false;
    }

    if (word == this.secret) {
      this.gameState = 'win';
    }
    this.guessedWords.push(word);

    return true;
  }

  getGuessedWords() {
    return this.guessedWords;
  }
}
