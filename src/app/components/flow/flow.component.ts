import { Component, EventEmitter, Input, Output } from '@angular/core';
import { flows } from "../../../flows/flows";
import { question, flow_data } from "../../../types/types";
import { FLOW_ENDS } from "./flow.constants";
import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';

enum steps {
  QUESTIONS = 1,
  RESULT = 2
}

@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.scss'],
  animations: [
    trigger('enter', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms 200ms'),
      ])
    ]),
    trigger('fade', [
      transition('*=>*', [
        style({ opacity: 0 }),
        animate(100),
      ])
    ])
  ]
})
export class FlowComponent {
  @Input() required_flow: string = "buy";
  @Output() restart: any = new EventEmitter<any>();
  flow: flow_data;
  flow_questions: question[];
  current_question: question;
  steps = steps;
  current_step = steps.QUESTIONS;
  result: any;
  is_positive_end: boolean = false;
  audio: HTMLAudioElement = new Audio('https://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3');

  constructor() {
    this.flow = flows[this.required_flow];
    this.flow_questions = this.flow.questions;
    this.current_question = this.flow_questions[0];
  }

  nextQuestion(event: any) {
    let nextID = event ? this.current_question.yesNextQuestionID : this.current_question.noNextQuestionID;

    switch (nextID) {
      case FLOW_ENDS.POSITIVE_END:
        this.is_positive_end = true;
        this.current_step = steps.RESULT;
        this.result = this.flow.positiveEnd;
        this.audio.play()
        break;
      case FLOW_ENDS.NEGATIVE_END:
        this.is_positive_end = false;
        this.current_step = steps.RESULT;
        this.result = this.flow.negativeEnd;
        this.audio.play()
        break;
      default:
        this.current_question = this.flow_questions.find(question => question.id === nextID)!;
        break;
    }

  }

  restartApp() {
    this.restart.emit(true);
  }

}
