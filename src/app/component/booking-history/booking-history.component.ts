import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bookings } from 'src/app/model/bookings';
import { Ticketbooking } from 'src/app/model/ticketbooking';
import { BookingsService } from 'src/app/service/bookings.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {
  ticketbookings!:Ticketbooking[];
  
  constructor(private bookingsService:BookingsService, private router:Router) { }

  ngOnInit(): void {
    this.getAllbookings();
  }

  getAllbookings(){
    this.bookingsService.getAllBookings().subscribe({
      next: (response: any) => {
        console.log(response);
        this.router.navigate(['/bookings']);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

}
