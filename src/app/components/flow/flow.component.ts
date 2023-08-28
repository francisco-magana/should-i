import { Component, Input } from '@angular/core';
import { flows } from "../../../flows/flows";
import { question, flow_data } from "../../../types/types";
import { FLOW_ENDS } from "./flow.constants";

enum steps {
  QUESTIONS = 1,
  RESULT = 2
}

@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.scss']
})
export class FlowComponent {
  @Input() required_flow: string = "buy";
  flow: flow_data;
  flow_questions: question[];
  current_question: question;
  steps = steps;
  current_step = steps.QUESTIONS;
  result: any;
  is_positive_end: boolean = false;

  constructor() {
    this.flow = flows[this.required_flow];
    this.flow_questions = this.flow.questions;
    this.current_question = this.flow_questions[0];
  }

  nextQuestion(event: any) {
    let nextID = event ? this.current_question.yesNextQuestionID : this.current_question.noNextQuestionID;

    switch(nextID) {
      case FLOW_ENDS.POSITIVE_END: 
        this.is_positive_end = true;
        this.current_step = steps.RESULT;
        this.result = this.flow.positiveEnd;
        break;
      case FLOW_ENDS.NEGATIVE_END:
        this.is_positive_end = false;
        this.current_step = steps.RESULT;
        this.result = this.flow.negativeEnd;
        break;
      default:
        this.current_question = this.flow_questions.find(question => question.id === nextID)!;
        break;
    }

  }

}
