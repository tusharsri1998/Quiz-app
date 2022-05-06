import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { QuizService} from '../services/quiz.service'

@Component({
  selector: 'app-list-quizzes',
  templateUrl: './list-quizzes.component.html',
  styleUrls: ['./list-quizzes.component.css']
})
export class ListQuizzesComponent implements OnInit {

  quizzes: Observable<any[]>;
  emails = [];
  loginuser: any;
  userEmail: any;


  constructor(public _shared: QuizService,private router: Router, private authService: AuthService) { 
    if(authService.user){
      this.loginuser = authService.user;
  }
  }

  ngOnInit(): void {
    this.quizzes = this._shared.getquizlist();
    //check which quizzes are previously attempted by user
    this.quizzes.subscribe(qlist=>{
      for(var i in qlist){
        // console.log(qlist[i].Users);
        for(var j in qlist[i].Users){
          // console.log(j);
            if(qlist[i].Users[j].email == this.loginuser.email){//Current user email 
                this.emails.push(i);
            }
        }
      }

    })
  }
  
  //get index of the selected quiz
  getIndex(i){
    this._shared.quizIndex = i;
    
  }

  //check whether quiz was previously attempted or not
  checkNotAttempted(index){
    for(var i=0;i<=this.emails.length;i++){
      if(this.emails[i]==index)
      return false;
    }
    return true;
  }
  //logout function
  onLogout(): void {
    if (this.authService.userLogout) {
      this.router.navigateByUrl('');
    } else {
      alert('Something went wrong');
    }
  }
  
  

}
