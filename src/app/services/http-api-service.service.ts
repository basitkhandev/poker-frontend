import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpApiServiceService {

  constructor(private http: HttpClient) { }

   // GET request
   get(url: string): Observable<any> {
    return this.http.get(url);
  }

    // GET request
    getByToken(url: string, headers: any): Observable<any> {
      return this.http.get(url, headers);
    }
  

  // POST request
  post(url: string, data: any): Observable<any> {
    return this.http.post(url, data);
  }

  // GET request by ID
  getById(url: string, id: any): Observable<any> {
    return this.http.get(`${url}/${id}`);
  }

  // DELETE request
  delete(url: string, id: any): Observable<any> {
    return this.http.delete(`${url}/${id}`);
  }
  
}
