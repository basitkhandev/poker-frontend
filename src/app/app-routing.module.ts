import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LogoutComponentComponent } from './components/logout-component/logout-component.component';
import { FindTutorComponent } from './components/find-tutor/find-tutor.component';
import { CoachesComponent } from './coaches/coaches.component';
import { StudentNewComponent } from './components/student-new/student-new.component';
import { ChatComponent } from './components/chat/chat.component';
import { CoachProfileComponent } from './components/coach-profile/coach-profile.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'sign_in', component: SignInComponent},
  {path: 'logout', component: LogoutComponentComponent},
  {path: 'tutor', component: FindTutorComponent},
  {path: 'coaches', component: CoachesComponent},
  {path: 'student_new', component: StudentNewComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'coach_profile', component: CoachProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
