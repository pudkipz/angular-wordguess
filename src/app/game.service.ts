import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  guessedWords: string[] = ['abcde'];
  secret: string = 'hello';
  gameState: string = 'active';

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
