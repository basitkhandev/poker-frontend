import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpApiServiceService } from 'src/app/services/http-api-service.service';

@Component({
  selector: 'app-find-tutor',
  templateUrl: './find-tutor.component.html',
  styleUrls: ['./find-tutor.component.css']
})
export class FindTutorComponent  implements OnInit{
  tutorsData: any = [];
  private _filteredTutors: any = [];

  constructor(private router: Router, private apiService: HttpApiServiceService){}

  ngOnInit() {
   this.apiService.get('https://cashcart-c3c3869602e3.herokuapp.com/api/tutors').subscribe((res: any) => {
    this.tutorsData = res;
    this._filteredTutors = this.tutorsData;
   }) 
  }
  navigate(id: any) {
    this.router.navigate(['/coach_profile/'+ id]);
  }

  get filteredTutors(): any[] {
    return this._filteredTutors;
  }

  searchTutors(searchTerm: any) {
    if (!searchTerm?.data) {
      this._filteredTutors = this.tutorsData;
      return;
    }

    this._filteredTutors = this.tutorsData.filter((tutor: any) => 
      tutor.name.toLowerCase().includes(searchTerm?.data.toLowerCase()) ||
      tutor.title.toLowerCase().includes(searchTerm?.data.toLowerCase()) ||
      tutor.description.toLowerCase().includes(searchTerm?.data.toLowerCase())
    );
  }

}
