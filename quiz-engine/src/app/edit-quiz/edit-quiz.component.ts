import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.css'],
})
export class EditQuizComponent implements OnInit {
  // @Input() selectedQuiz
  selectedQuiz: any;
  public addNewQuestion: boolean = false;

  constructor(private _service: AdminService, private router: Router) {
    this.selectedQuiz = this._service.selectedQuiz;
  }

  ngOnInit(): void {
    // console.log(this.selectedQuiz);
  }

  remove(item, i) {
    // console.log(item);
    // console.log(i);
    this._service.removeQuestion(i, this.selectedQuiz);
    // add router to navigate to admin component
    this.router.navigateByUrl('admin');
  }

  showform() {
    this.addNewQuestion = true;
  }

  addQuestion(data: NgForm) {
    // console.log(data.value);
    this._service.addQuestionData(data.value, this.selectedQuiz.id, this.selectedQuiz.MaxScore);
    data.reset();
    this.addNewQuestion = false;
    // add router to navigate to admin component
    this.router.navigateByUrl('admin');
  }

  updateLink(link) {
    this._service.updateVideo(link.value, this.selectedQuiz.id);
    // add router to navigate to admin component
    this.router.navigateByUrl('admin');
  }

  updateDesc(data) {
    this._service.updateCourseDesc(data.value, this.selectedQuiz.id);
    // add router to navigate to admin component
    this.router.navigateByUrl('admin');
  }
}
