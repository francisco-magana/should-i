import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './components/ui/title/title.component';
import { QuestionComponent } from './components/question/question.component';
import { FlowComponent } from './components/flow/flow.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    QuestionComponent,
    FlowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
