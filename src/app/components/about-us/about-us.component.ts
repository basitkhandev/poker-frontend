import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Observable } from 'rxjs';
import { HttpApiServiceService } from 'src/app/services/http-api-service.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit {
  allQuestions: any = [];

  constructor(private apiService: HttpApiServiceService, private http: HttpClient) { }

  ngOnInit() {
    const url = 'https://cashcart-c3c3869602e3.herokuapp.com/api/users';
    const token = localStorage.getItem('token');

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      })
    };

   this.apiService.getByToken(url, httpOptions).subscribe((res: any) => {
   console.log(res);
   });
   this.getMessageOfTutuor();
  
  }


  getMessageOfTutuor() {
    this.apiService.get('https://cashcart-c3c3869602e3.herokuapp.com/api/tutor-frequently-questions').subscribe((res: any) => {
      this.allQuestions= res;
      });
  }

}
