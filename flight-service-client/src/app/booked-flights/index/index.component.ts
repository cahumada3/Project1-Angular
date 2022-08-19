import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookedFlightsService } from '../booked-flights.service';
import { BookedFlight } from '../booked-flight';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  id!: number;
  
  bookedFlights: BookedFlight[] = [];

  constructor(
    private bookedflightsService: BookedFlightsService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    //this.id = this.route.snapshot.params['id'];
    this.retrieveBookings();
  }

  retrieveBooking(id:number){
    this.bookedflightsService.getBooking(id).subscribe(b => {
         this.bookedFlights = this.bookedFlights.filter(item => item.id !== id);
         console.log('Booking retrieved successfully!');
    })
  }

  retrieveBookings() : void{
    this.bookedflightsService.getBookings().subscribe(bookedFlights => this.bookedFlights = bookedFlights);
  }

  delete(id:number){
    this.bookedflightsService.deleteBooking(id).subscribe(b => {
         this.bookedFlights = this.bookedFlights.filter(item => item.id !== id);
         console.log('Booking deleted successfully!');
    })
  }
  

}
