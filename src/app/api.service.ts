import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getSomeData(): Observable<any> {
    const apiUrl = 'https://testapi-qsha.onrender.com/'; // Replace with your API endpoint
    return this.http.get<any>(apiUrl);
  }
}
