import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeginQuizComponent } from './begin-quiz/begin-quiz.component';

import { ListQuizzesComponent } from './list-quizzes/list-quizzes.component';
import { QuizDescriptionComponent } from './quiz-description/quiz-description.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminLoginFormComponent } from './admin-login-form/admin-login-form.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { EditQuizComponent } from './edit-quiz/edit-quiz.component';
import { AdminGuard } from './admin.guard';
import { EditGuardGuard } from './edit-guard.guard';

const routes: Routes = [
  { path: 'user', component: ListQuizzesComponent},
  { path: 'qdescription', component: QuizDescriptionComponent},
  { path: 'quizStart', component: BeginQuizComponent },
  { path: '', component: HomePageComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'edit', component: EditQuizComponent },
  { path: 'user', component: UserComponent },
  { path: 'about', component: AboutComponent },
  { path: 'admin/login', component: AdminLoginFormComponent },
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
