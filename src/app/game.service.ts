import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  guessedWords: string[] = ['abcde'];

  getGuessedWords() {
    return this.guessedWords;
  }
}
