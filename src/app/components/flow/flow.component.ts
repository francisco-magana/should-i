import { Component, Input } from '@angular/core';
import { flows } from "../../../flows/flows";
import { question } from "../../../types/types";

@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.scss']
})
export class FlowComponent {
  @Input() flow: string = "buy";
  flow_questions: question[];
  constructor() {
    this.flow_questions = flows[this.flow].questions;
    console.log(this.flow_questions)
  }
}
