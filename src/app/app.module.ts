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


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    SignInComponent
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
    PasswordModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
