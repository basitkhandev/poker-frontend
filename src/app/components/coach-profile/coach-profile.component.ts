import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpApiServiceService } from 'src/app/services/http-api-service.service';

@Component({
  selector: 'app-coach-profile',
  templateUrl: './coach-profile.component.html',
  styleUrls: ['./coach-profile.component.css']
})
export class CoachProfileComponent implements OnInit{
    tutorData: any = [];
    paramsId: any;
    allQuestions: any = [];
  responsiveOptions: any[] | undefined;
  products: any[] = [
    {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
    },
    {
        id: '1001',
        code: 'nvklal433',
        name: 'Black Watch',
        description: 'Product Description',
        image: 'black-watch.jpg',
        price: 72,
        category: 'Accessories',
        quantity: 61,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4
    },
    {
        id: '1002',
        code: 'zz21cz3c1',
        name: 'Blue Band',
        description: 'Product Description',
        image: 'blue-band.jpg',
        price: 79,
        category: 'Fitness',
        quantity: 2,
        inventoryStatus: 'LOWSTOCK',
        rating: 3
    },
    {
        id: '1003',
        code: '244wgerg2',
        name: 'Blue T-Shirt',
        description: 'Product Description',
        image: 'blue-t-shirt.jpg',
        price: 29,
        category: 'Clothing',
        quantity: 25,
        inventoryStatus: 'INSTOCK',
        rating: 5
    },
    {
        id: '1004',
        code: 'h456wer53',
        name: 'Bracelet',
        description: 'Product Description',
        image: 'bracelet.jpg',
        price: 15,
        category: 'Accessories',
        quantity: 73,
        inventoryStatus: 'INSTOCK',
        rating: 4
    },
    {
        id: '1005',
        code: 'av2231fwg',
        name: 'Brown Purse',
        description: 'Product Description',
        image: 'brown-purse.jpg',
        price: 120,
        category: 'Accessories',
        quantity: 0,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4
    }];

    constructor(
        private route: ActivatedRoute,
        private apiService: HttpApiServiceService
      ) { }
  ngOnInit() {
    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];

  this.route.paramMap.subscribe((params: any) => {
    this.paramsId = +params?.get('id'); 
    this.apiService.get('https://cashcart-c3c3869602e3.herokuapp.com/api/tutors/'+  this.paramsId ).subscribe((res: any) => {
        this.tutorData = res;
        console.log(res)
       }) 
  });

   this.getMessageOfTutuor();
  }

  getMessageOfTutuor() {
    this.apiService.get('https://cashcart-c3c3869602e3.herokuapp.com/api/tutor-frequently-questions/'+  this.paramsId).subscribe((res: any) => {
      this.allQuestions= res;
      console.log( this.allQuestions)
      });
  }

}
