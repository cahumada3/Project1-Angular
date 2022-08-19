import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookedFlightsService } from '../booked-flights.service';
import { BookedFlight } from '../booked-flight';
import { Passenger } from 'src/app/passengers/passenger';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id!: number;

  bookedFlight: BookedFlight[] = [];

  constructor(
    private bookedflightsService: BookedFlightsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  retrieveBooking(id:number){
    this.bookedflightsService.getBooking(id).subscribe(b => {
         this.bookedFlight = this.bookedFlight.filter(item => item.id !== id);
         console.log('Booking retrieved successfully!');
    })
  }

}
