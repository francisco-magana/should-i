import { Component, EventEmitter, Input, Output } from '@angular/core';
import{ question } from "../../../types/types";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {

  @Input() question: question | undefined;
  @Output() selected_option: any = new EventEmitter<any>();
  audio: HTMLAudioElement = new Audio('https://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3');

  emitSelectedOption(value: any) {
    this.selected_option.emit(value);
    this.audio.play()
  }

}
