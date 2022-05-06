import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-quiz-description',
  templateUrl: './quiz-description.component.html',
  styleUrls: ['./quiz-description.component.css']
})
export class QuizDescriptionComponent implements OnInit {

  quizzes: Observable<any[]>;
  Qindex:number;
  description:string;
  title:string;
  video:string;
  
  constructor(public _shared: QuizService, public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
   
     this.Qindex = this._shared.quizIndex; //get index of selected quiz
     this.quizzes = this._shared.getquizlist();
     //get description, title and video of selected quiz
     this.quizzes.subscribe(qlist=>{
        this.description = qlist[this.Qindex].CourseDescription;
        this.title = qlist[this.Qindex].Title;
        this.video = qlist[this.Qindex].CourseVideo;
    })
    
  }

}
