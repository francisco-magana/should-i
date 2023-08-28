import { Component } from '@angular/core';

enum steps {
  SHOW_TITLE = 1,
  QUESTIONS = 2
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  steps = steps;
  current_step: number = steps.SHOW_TITLE;

  startQuestions() {
    this.current_step = this.steps.QUESTIONS;
  }

}
