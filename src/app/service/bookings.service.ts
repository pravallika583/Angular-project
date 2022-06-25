import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor(private http:HttpClient) { }
  getAllBookings() {
    return this.http.get(`http://localhost:9091/api/ticket/all`);
  }
}
