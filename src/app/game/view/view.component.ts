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

  handleSubmit() {

  }

  getGuessedWords(): string[] {
    return this.gameService.getGuessedWords();
  }

  guessWord() {
    console.log('guess word')
  }
}
