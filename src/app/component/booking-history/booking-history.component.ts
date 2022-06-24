import { Component, OnInit } from '@angular/core';
import { Bookings } from 'src/app/model/bookings';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {
  bookingMovies!:Bookings[];

  constructor() { }

  ngOnInit(): void {
  }

}
