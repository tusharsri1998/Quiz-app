import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  quizForm: FormGroup;
  Questions: FormArray;
  public hideForm: boolean = true;
  public showQuiz: boolean = false;
  admin: any;
  public quizzes = [];
  public selectedQuiz;
  // init the services and the router
  constructor(
    private authService: AuthService,
    private router: Router,
    private _fb: FormBuilder,
    private _service: AdminService
  ) {
    this.admin = this.authService.admin;
  }

  ngOnInit(): void {
    // pushing data to quizzes array
    this._service.getQuizzes().subscribe((res) => {
      this.quizzes = [];
      for (var i = 0; i < res.length; i++) {
        this.quizzes.push(res[i].payload.doc.data());
      }
      for (var i = 0; i < res.length; i++) {
        this.quizzes[i].id = res[i].payload.doc.id;
      }
    });

    // building form group
    this.quizForm = this._fb.group({
      Title: ['', Validators.required],
      MaxScore: [''],
      Description: ['', Validators.required],
      Questions: this._fb.array([this.createItem()]),
      CourseDescription: ['', Validators.required],
      CourseVideo: ['', Validators.required],
      Users: this._fb.array([]),
    });
  }

  editdata(data) {
    this.showQuiz = true;
    this.hideForm = true;
    this.selectedQuiz = data;
    this._service.routeDataToEdit(data);
    this.router.navigateByUrl('edit');
  }

  // creating formarray element
  createItem(): FormGroup {
    return this._fb.group({
      question: ['', Validators.required],
      option1: ['', Validators.required],
      option2: ['', Validators.required],
      option3: ['', Validators.required],
      option4: ['', Validators.required],
      correct: ['', Validators.required],
    });
  }

  addItem(): void {
    this.Questions = (<FormArray>this.quizForm.get('Questions')) as FormArray;
    this.Questions.push(this.createItem());
  }

  removeItem(i: number) {
    (<FormArray>this.quizForm.get('Questions')).removeAt(i);
  }

  onSubmit() {
    this.quizForm.value.CourseVideo = this.quizForm.value.CourseVideo.replace(
      'watch?v=',
      'embed/'
    );
    this.quizForm.value.MaxScore = this.quizForm.value.Questions.length
    this.hideForm=true;
    this._service.addNewQuiz(this.quizForm);

    // this.quizForm.reset();
  }

  // called when logout button on the admin screen clicked
  onLogout(): void {
    localStorage.removeItem('token');
    this.router.navigateByUrl('');
  }

  showform() {
    this.showQuiz = false;
    this.hideForm = false;
  }
}
