import { Component, Input } from '@angular/core';
import{ question } from "../../../types/types";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {

  @Input() question: question | undefined;

}
