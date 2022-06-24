import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewMovie } from 'src/app/model/newMovie';
import { Ticketbooking } from 'src/app/model/ticketbooking';
import { MovieService } from 'src/app/service/movie.service';
import { TicketService } from 'src/app/service/ticket.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() newMovie!: NewMovie;
  count!: number;
  @Input() ticketbooking!: Ticketbooking;

  constructor(
    private router: Router,
    private ticketService: TicketService,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {}
  bookticket() {
    console.log(this.ticketbooking);
    this.ticketService.bookticket(this.ticketbooking).subscribe({
      next: (response: any) => {
        console.log();
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  delete(id: number) {
    this.movieService.delete(id).subscribe({
      next: (response: any) => console.log(response),
      error: (error: any) => console.log(error),
    });
  }
  edit(movie: NewMovie) {
    this.router.navigate(['/add', movie.id]);
  }
}
