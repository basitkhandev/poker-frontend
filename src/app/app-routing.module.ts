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
import { CreateJobPostingComponent } from './components/create-job-posting/create-job-posting.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AccountProfileComponent } from './components/account-profile/account-profile.component';
import { ChangeComponentComponent } from './components/change-password/change-password-component.component';
import { AuthGuard } from './services/auth.guard';
import { NotAuthenticatedGuard } from './services/not-auth.guard';

const routes: Routes = [
  { path: 'signin', component: SignInComponent , canActivate: [NotAuthenticatedGuard]},
  { path: 'dashboard', component: AboutUsComponent, canActivate: [AuthGuard] },
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  // Add other routes here

  {path: 'logout', component: LogoutComponentComponent},
  {path: 'tutor', component: FindTutorComponent, canActivate: [AuthGuard]},
  {path: 'coaches', component: CoachesComponent, canActivate: [AuthGuard]},
  {path: 'student_new', component: StudentNewComponent, canActivate: [AuthGuard]},
  {path: 'chat', component: ChatComponent,  canActivate: [AuthGuard]},
  {path: 'coach_profile/:id', component: CoachProfileComponent, canActivate: [AuthGuard]},
  {path: 'create_job', component: CreateJobPostingComponent, canActivate: [AuthGuard]},
  {path: 'change_password', component: ForgotPasswordComponent, canActivate: [AuthGuard]},
  {path: 'forget_password', component: ChangeComponentComponent, canActivate: [AuthGuard]},
  {path: 'payment', component: PaymentComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: AccountProfileComponent, canActivate: [AuthGuard]},

  // {path: '', component: HomeComponent},
  // {path: 'about', component: AboutUsComponent},
  // {path: 'sign_in', component: SignInComponent},
  // {path: 'logout', component: LogoutComponentComponent},
  // {path: 'tutor', component: FindTutorComponent},
  // {path: 'coaches', component: CoachesComponent},
  // {path: 'student_new', component: StudentNewComponent},
  // {path: 'chat', component: ChatComponent},
  // {path: 'coach_profile/:id', component: CoachProfileComponent, pathMatch: 'full'},
  // {path: 'create_job', component: CreateJobPostingComponent},
  // {path: 'change_password', component: ForgotPasswordComponent},
  // {path: 'forget_password', component: ChangeComponentComponent},
  // {path: 'payment', component: PaymentComponent},
  // {path: 'profile', component: AccountProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
