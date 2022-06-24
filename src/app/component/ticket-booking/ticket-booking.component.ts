import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticketbooking } from 'src/app/model/ticketbooking';
import { MovieService } from 'src/app/service/movie.service';
import { NewMovie } from 'src/app/model/newMovie';
@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.css'],
})
export class TicketBookingComponent implements OnInit {
  id: number = 0;
  movie!: NewMovie;
  ticketbooking: Ticketbooking = {
    moviename: '',
    NoOfTickets: 1,
    price: 0,
    Timings: 'first',
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.movieService.getMovieById(this.id).subscribe({
      next: (response: any) => {
        this.movie = response;
        console.log(response);
        this.ticketbooking.moviename = this.movie.moviename;
        this.ticketbooking.price = this.movie.price;
        console.log(this.ticketbooking);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  payment() {
    this.router.navigate(['/payment']);
  }
}
