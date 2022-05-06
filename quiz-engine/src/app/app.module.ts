import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AppRoutingModule } from './app-routing.module';
import { environment } from "src/environments/environment";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { ListQuizzesComponent } from './list-quizzes/list-quizzes.component';
import { QuizDescriptionComponent } from './quiz-description/quiz-description.component';
import { BeginQuizComponent } from './begin-quiz/begin-quiz.component';


import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AdminLoginFormComponent } from './admin-login-form/admin-login-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EditQuizComponent } from './edit-quiz/edit-quiz.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ListQuizzesComponent,
    QuizDescriptionComponent,
    BeginQuizComponent,
    AdminComponent,
    UserComponent,
    AdminLoginFormComponent,
    HomePageComponent,
    EditQuizComponent,
    AdminNavbarComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MaterialModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
