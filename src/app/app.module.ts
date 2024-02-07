import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './common/components/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './sign-in/sign-in.component';
import { PasswordModule } from 'primeng/password';
import { LogoutComponentComponent } from './components/logout-component/logout-component.component';
import { FindTutorComponent } from './components/find-tutor/find-tutor.component';
import { RatingModule } from 'primeng/rating';
import { CoachesComponent } from './coaches/coaches.component';
import { StudentNewComponent } from './components/student-new/student-new.component';
import { ChatComponent } from './components/chat/chat.component';
import { CoachProfileComponent } from './components/coach-profile/coach-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    SignInComponent,
    LogoutComponentComponent,
    FindTutorComponent,
    CoachesComponent,
    StudentNewComponent,
    ChatComponent,
    CoachProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    CardModule,
    AccordionModule,
    PasswordModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
