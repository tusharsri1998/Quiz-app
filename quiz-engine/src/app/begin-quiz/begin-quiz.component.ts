import { Component, OnInit } from '@angular/core';

import { _DisposeViewRepeaterStrategy } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { QuizService } from '../services/quiz.service';

import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'begin-quiz',
  templateUrl: './begin-quiz.component.html',
  styleUrls: ['./begin-quiz.component.css']
})
export class BeginQuizComponent implements OnInit {
  public questions:Observable<any> ;
  public userAnswers:number[]=[];
  public submitted:boolean;
  public marks:number;
  public quizzes: Observable<any[]>;
  public Qindex;
  public loginuser;
  public useradd;
  public users:Observable<any>;
  public called:boolean;
  public title:string;

  constructor(public _shared: QuizService,private authService: AuthService) {
      this.loginuser = authService.user;

  }

  ngOnInit(): void {
    this.Qindex = this._shared.quizIndex;
    this.quizzes = this._shared.getquizlist();
    this.quizzes.subscribe(qlist=>{
      this.title = qlist[this.Qindex].Title;
      this.useradd = qlist[this.Qindex];
      this.questions = qlist[this.Qindex].Questions;
      this.users = qlist[this.Qindex].Users;
      this.called = false;
      for(var i in this.questions)
      {
        this.userAnswers.push(0);
      }
    })
    this.submitted=false;
    this.marks=0;

    
  }
  

  selectOption(id,option)
  {
    // console.log(id,option);
      var questionAnswer = this.questions[id];
      this.userAnswers[id]=option;
      
  }

  submitQuiz()
  {
    var x = confirm("Are you sure?");
    if(x==true){
    this.submitted=true;
      var i;
      var k = 0;
      var l=this.userAnswers.length;
    // console.log(this.questions);
      for(i in this.questions)
      {
          if(this.questions[i].correct==this.userAnswers[k])
          {
            this.marks+=1;               //get total marks of user
          }
          k++;
      }
      //to get date when quiz was submitted by user
      var date = new Date();
      var quizDate = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
      var user = {date:quizDate,email:this.loginuser.email,score:this.marks};
      this._shared.addUser(user,this.useradd); //add users email, score and marks in database
      
    }
    else{
      console.log("Cancelled");
    }
  }
  
    
}
