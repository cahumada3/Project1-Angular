import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../flights.service';
import { Flight } from '../flight';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  flights: Flight[] = [];

  constructor(private flightsService: FlightsService) { }

  ngOnInit(): void {
    this.retrieveFlights();
  }

  retrieveFlights() : void{
    this.flightsService.getFlights().subscribe(flights => this.flights = flights);
  }

  delete(id:number){
    this.flightsService.deleteFlight(id).subscribe(f => {
         this.flights = this.flights.filter(item => item.id !== id);
         console.log('Flight deleted successfully!');
    })
  }

}
