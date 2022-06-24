import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http:HttpClient) { }

  bookticket(ticket:any){
    return this.http.post(`http://localhost:9091/api/auth/ticket-booking`,ticket);
  }
}
